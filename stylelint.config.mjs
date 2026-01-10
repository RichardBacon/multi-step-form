/** @type {import("stylelint").Config} */
export default {
  extends: ['stylelint-config-standard', 'stylelint-config-concentric-order'],

  overrides: [
    {
      files: ['**/*.module.css'],
      rules: {
        // Allow camelCase in CSS Modules
        'selector-class-pattern': '^[a-z][a-zA-Z0-9]*$',
      },
    },
  ],
};
