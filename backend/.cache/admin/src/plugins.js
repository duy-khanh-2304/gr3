
import contentTypeBuilder from '../../../node_modules/@strapi/plugin-content-type-builder/strapi-admin.js';
import email from '../../../node_modules/@strapi/plugin-email/strapi-admin.js';
import upload from '../../../node_modules/@strapi/plugin-upload/strapi-admin.js';
import locationField from '../../../node_modules/strapi-location-field-plugin/strapi-admin.js';
import ckeditor from '../../../src/plugins/strapi-plugin-ckeditor/strapi-admin.js';
import entityRelationshipChart from '../../../node_modules/strapi-plugin-entity-relationship-chart/strapi-admin.js';
import importExportEntries from '../../../node_modules/strapi-plugin-import-export-entries/strapi-admin.js';
import menus from '../../../node_modules/strapi-plugin-menus/strapi-admin.js';
import seo from '../../../node_modules/@strapi/plugin-seo/strapi-admin.js';
import statistics from '../../../src/plugins/statistics/strapi-admin.js';
import ckeditor5 from '../../../node_modules/@_sh/strapi-plugin-ckeditor/strapi-admin.js';
import contentVersioning from '../../../node_modules/@notum-cz/strapi-plugin-content-versioning/strapi-admin.js';
import colorPicker from '../../../node_modules/@strapi/plugin-color-picker/strapi-admin.js';
import documentation from '../../../node_modules/@strapi/plugin-documentation/strapi-admin.js';
import i18N from '../../../node_modules/@strapi/plugin-i18n/strapi-admin.js';
import usersPermissions from '../../../node_modules/@strapi/plugin-users-permissions/strapi-admin.js';
import configSync from '../../../node_modules/strapi-plugin-config-sync/strapi-admin.js';
import multiSelect from '../../../node_modules/strapi-plugin-multi-select/strapi-admin.js';
import oembed from '../../../node_modules/strapi-plugin-oembed/strapi-admin.js';
import restCache from '../../../node_modules/strapi-plugin-rest-cache/strapi-admin.js';


const plugins = {
  'content-type-builder': contentTypeBuilder,
  'email': email,
  'upload': upload,
  'location-field': locationField,
  'ckeditor': ckeditor,
  'entity-relationship-chart': entityRelationshipChart,
  'import-export-entries': importExportEntries,
  'menus': menus,
  'seo': seo,
  'statistics': statistics,
  'ckeditor5': ckeditor5,
  'content-versioning': contentVersioning,
  'color-picker': colorPicker,
  'documentation': documentation,
  'i18n': i18N,
  'users-permissions': usersPermissions,
  'config-sync': configSync,
  'multi-select': multiSelect,
  'oembed': oembed,
  'rest-cache': restCache,
};

export default plugins;
