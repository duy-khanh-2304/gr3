
import contentTypeBuilder from '../../../node_modules/@strapi/plugin-content-type-builder/strapi-admin.js';
import email from '../../../node_modules/@strapi/plugin-email/strapi-admin.js';
import upload from '../../../node_modules/@strapi/plugin-upload/strapi-admin.js';
import locationField from '../../../node_modules/strapi-location-field-plugin/strapi-admin.js';
import ckeditor from '../../../src/plugins/strapi-plugin-ckeditor/strapi-admin.js';
import entityRelationshipChart from '../../../node_modules/strapi-plugin-entity-relationship-chart/strapi-admin.js';
import contentVersioning from '../../../node_modules/@notum-cz/strapi-plugin-content-versioning/strapi-admin.js';
import importExportEntries from '../../../node_modules/strapi-plugin-import-export-entries/strapi-admin.js';
import ckeditor5 from '../../../node_modules/@_sh/strapi-plugin-ckeditor/strapi-admin.js';
import colorPicker from '../../../node_modules/@strapi/plugin-color-picker/strapi-admin.js';
import documentation from '../../../node_modules/@strapi/plugin-documentation/strapi-admin.js';
import i18N from '../../../node_modules/@strapi/plugin-i18n/strapi-admin.js';
import usersPermissions from '../../../node_modules/@strapi/plugin-users-permissions/strapi-admin.js';
import configSync from '../../../node_modules/strapi-plugin-config-sync/strapi-admin.js';
import multiSelect from '../../../node_modules/strapi-plugin-multi-select/strapi-admin.js';
import strapiTiptapEditor from '../../../node_modules/strapi-tiptap-editor/strapi-admin.js';


const plugins = {
  'content-type-builder': contentTypeBuilder,
  'email': email,
  'upload': upload,
  'location-field': locationField,
  'ckeditor': ckeditor,
  'entity-relationship-chart': entityRelationshipChart,
  'content-versioning': contentVersioning,
  'import-export-entries': importExportEntries,
  'ckeditor5': ckeditor5,
  'color-picker': colorPicker,
  'documentation': documentation,
  'i18n': i18N,
  'users-permissions': usersPermissions,
  'config-sync': configSync,
  'multi-select': multiSelect,
  'strapi-tiptap-editor': strapiTiptapEditor,
};

export default plugins;
