module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        news: {
          field: 'slug',
          references: 'title',
        },
      },
    },
  },
  "location-field": {
    enabled: true,
    config: {
      fields: ["photo", "rating"], // optional
      // You need to enable "Autocomplete API" and "Places API" in your Google Cloud Console
      googleMapsApiKey: env("GOOGLE_MAPS_API_KEY"),
      // See https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest
      autocompletionRequestOptions: {
        language: 'vi',
        locationBias: 'IP_BIAS',
      },
    },
  },
  ckeditor: {
    enabled: true,
    resolve: "./src/plugins/strapi-plugin-ckeditor"
  },
  "entity-relationship-chart": {
    enabled: true,
    config: {
      // By default all contentTypes and components are included.
      // To exlclude strapi's internal models, use:
      exclude: [
        "strapi::core-store",
        "webhook",
        "admin::permission",
        "admin::user",
        "admin::role",
        "admin::api-token",
        "plugin::upload.file",
        "plugin::i18n.locale",
        "plugin::users-permissions.permission",
        "plugin::users-permissions.role",
      ],
    },
  },
  'import-export-entries': {
    enabled: true,
    config: {
      // See `Config` section.
    },
  },
  seo: {
    enabled: true,
  },
  transformer: {
    enabled: true,
    config: {
      responseTransforms: {
        removeAttributesKey: true,
        removeDataKey: true,
      },
      plugins: {
        ids: {
          'slugify': true,
        }
      }
    }
  },
  'statistics': {
    enabled: true,
    resolve: './src/plugins/statistics'
  },
  'comments': {
    enabled: true,
    resolve: './src/plugins/comments'
  },
  'search-gg-scholar': {
    enabled: true,
    resolve: './src/plugins/search-gg-scholar'
  },
});