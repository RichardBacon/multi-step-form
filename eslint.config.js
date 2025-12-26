import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import testingLibrary from 'eslint-plugin-testing-library';
import vitest from 'eslint-plugin-vitest';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  globalIgnores(['dist', 'coverage']),

  // Base JS recommendations
  js.configs.recommended,

  // App code (React + TS)
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      tseslint.configs.recommended,

      react.configs.flat.recommended,
      react.configs.flat['jsx-runtime'],

      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,

      importPlugin.flatConfigs.recommended,
      importPlugin.flatConfigs.typescript,

      jsxA11y.flatConfigs.recommended,
    ],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    settings: {
      react: { version: 'detect' },
      'import/resolver': {
        typescript: {
          project: './tsconfig.json',
        },
        node: true,
      },
    },

    rules: {
      'import/no-unresolved': ['error', { ignore: ['^/'] }],
      'react/prop-types': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ],
    },
  },

  // Tests only (Vitest + Testing Library)
  {
    files: ['**/*.{test,spec}.{ts,tsx}'],
    extends: [testingLibrary.configs['flat/react'], vitest.configs.recommended],
    languageOptions: {
      globals: {
        ...globals.vitest,
      },
    },
  },

  // Prettier (turn off conflicting stylistic rules)
  eslintConfigPrettier,
]);
