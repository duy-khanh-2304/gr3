
import contentTypeBuilder from '../../../node_modules/@strapi/plugin-content-type-builder/strapi-admin.js';
import email from '../../../node_modules/@strapi/plugin-email/strapi-admin.js';
import upload from '../../../node_modules/@strapi/plugin-upload/strapi-admin.js';
import ckeditor5 from '../../../node_modules/@_sh/strapi-plugin-ckeditor/strapi-admin.js';
import ckeditor from '../../../node_modules/@ckeditor/strapi-plugin-ckeditor/strapi-admin.js';
import colorPicker from '../../../node_modules/@strapi/plugin-color-picker/strapi-admin.js';
import i18N from '../../../node_modules/@strapi/plugin-i18n/strapi-admin.js';
import usersPermissions from '../../../node_modules/@strapi/plugin-users-permissions/strapi-admin.js';
import multiSelect from '../../../node_modules/strapi-plugin-multi-select/strapi-admin.js';
import strapiTiptapEditor from '../../../node_modules/strapi-tiptap-editor/strapi-admin.js';


const plugins = {
  'content-type-builder': contentTypeBuilder,
  'email': email,
  'upload': upload,
  'ckeditor5': ckeditor5,
  'ckeditor': ckeditor,
  'color-picker': colorPicker,
  'i18n': i18N,
  'users-permissions': usersPermissions,
  'multi-select': multiSelect,
  'strapi-tiptap-editor': strapiTiptapEditor,
};

export default plugins;
