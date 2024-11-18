import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
  {
    ignores: ['dist'], // 빌드 결과물 제외
  },
  {
    files: ['**/*.{ts,tsx}'], // TypeScript 파일에 적용
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: tsParser, // TypeScript 파서 설정
    },
    plugins: {
      '@typescript-eslint': tseslint,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...tseslint.configs.recommended.rules, // 객체 병합
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
];
