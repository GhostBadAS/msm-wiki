const test = require('node:test');
const assert = require('node:assert/strict');

const {
  buildGitLogArgs,
  extractCommitShas,
  buildSummaryPrompt,
  selectDiffFiles,
} = require('../scripts/ai-release-summary.cjs');

test('buildGitLogArgs prefers previous source commit range over release time window', () => {
  const previousCommit = '71e809decc2fe751e76841fc127ed9ec873e1f5b';

  assert.deepEqual(
    buildGitLogArgs({
      previousCommit,
      logSinceEpoch: '200',
      logUntilEpoch: '300',
      currentRef: 'HEAD',
    }),
    [`${previousCommit}..HEAD`],
  );
});

test('extractCommitShas finds GitHub commit URLs in commit text', () => {
  assert.deepEqual(
    extractCommitShas(
      'see https://github.com/msm9527/msm/commit/cdf8bf4fbb302ca946196d0022266035f3eb468e for details',
    ),
    ['cdf8bf4fbb302ca946196d0022266035f3eb468e'],
  );
});

test('selectDiffFiles filters noisy generated files before collecting patches', () => {
  assert.deepEqual(
    selectDiffFiles([
      { path: 'package-lock.json' },
      { path: 'backend/internal/config/loader.go' },
      { path: 'frontend/src/pages/Settings.vue' },
      { path: 'dist/msm-linux-amd64.tar.gz' },
    ]),
    ['backend/internal/config/loader.go', 'frontend/src/pages/Settings.vue'],
  );
});

test('buildSummaryPrompt includes body, files, diff, and linked commit context for vague commits', () => {
  const prompt = buildSummaryPrompt([
    {
      hash: 'cdf8bf4fbb302ca946196d0022266035f3eb468e',
      shortHash: 'cdf8bf4',
      subject: 'Dev (#58)',
      author: 'msm',
      date: '2 hours ago',
      body: 'Ref: https://github.com/msm9527/msm/commit/1111111111111111111111111111111111111111',
      files: [
        { status: 'M', path: 'backend/internal/config/loader.go' },
        { status: 'M', path: 'frontend/src/pages/Settings.vue' },
      ],
      diff: '@@ func LoadConfig @@\n+ restore missing config refs before startup',
      linkedCommits: [
        {
          shortHash: '1111111',
          subject: 'fix: restore missing config refs',
          files: [{ status: 'M', path: 'backend/internal/config/loader.go' }],
        },
      ],
    },
  ]);

  assert.match(prompt, /Dev \(#58\)/);
  assert.match(prompt, /backend\/internal\/config\/loader\.go/);
  assert.match(prompt, /restore missing config refs/);
  assert.match(prompt, /引用提交/);
});
