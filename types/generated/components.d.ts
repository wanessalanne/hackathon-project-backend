import type { Schema, Attribute } from '@strapi/strapi';

export interface ButtonButtonReport extends Schema.Component {
  collectionName: 'components_button_button_reports';
  info: {
    displayName: 'button-report';
    icon: 'cursor';
  };
  attributes: {};
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'button.button-report': ButtonButtonReport;
    }
  }
}
