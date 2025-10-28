// @ts-nocheck


export const routes = {
  "meta": {},
  "id": "_default",
  "name": "",
  "file": {
    "path": "src/routes/_module.svelte",
    "dir": "src/routes",
    "base": "_module.svelte",
    "ext": ".svelte",
    "name": "_module"
  },
  "asyncModule": () => import('../src/routes/_module.svelte'),
  "rootName": "default",
  "routifyDir": import.meta.url,
  "children": [
    {
      "meta": {
        "dynamic": true,
        "order": false,
        "dynamicSpread": true
      },
      "id": "_default_____404__svelte",
      "name": "[...404]",
      "file": {
        "path": "src/routes/[...404].svelte",
        "dir": "src/routes",
        "base": "[...404].svelte",
        "ext": ".svelte",
        "name": "[...404]"
      },
      "asyncModule": () => import('../src/routes/[...404].svelte'),
      "children": []
    },
    {
      "meta": {},
      "id": "_default_about",
      "name": "about",
      "module": false,
      "file": {
        "path": "src/routes/about",
        "dir": "src/routes",
        "base": "about",
        "ext": "",
        "name": "about"
      },
      "children": [
        {
          "meta": {
            "isDefault": true
          },
          "id": "_default_about_index_svelte",
          "name": "index",
          "file": {
            "path": "src/routes/about/index.svelte",
            "dir": "src/routes/about",
            "base": "index.svelte",
            "ext": ".svelte",
            "name": "index"
          },
          "asyncModule": () => import('../src/routes/about/index.svelte'),
          "children": []
        }
      ]
    },
    {
      "meta": {},
      "id": "_default_cv",
      "name": "cv",
      "module": false,
      "file": {
        "path": "src/routes/cv",
        "dir": "src/routes",
        "base": "cv",
        "ext": "",
        "name": "cv"
      },
      "children": [
        {
          "meta": {
            "isDefault": true
          },
          "id": "_default_cv_index_svelte",
          "name": "index",
          "file": {
            "path": "src/routes/cv/index.svelte",
            "dir": "src/routes/cv",
            "base": "index.svelte",
            "ext": ".svelte",
            "name": "index"
          },
          "asyncModule": () => import('../src/routes/cv/index.svelte'),
          "children": []
        }
      ]
    },
    {
      "meta": {
        "isDefault": true
      },
      "id": "_default_index_svelte",
      "name": "index",
      "file": {
        "path": "src/routes/index.svelte",
        "dir": "src/routes",
        "base": "index.svelte",
        "ext": ".svelte",
        "name": "index"
      },
      "asyncModule": () => import('../src/routes/index.svelte'),
      "children": []
    },
    {
      "meta": {},
      "id": "_default_projects",
      "name": "projects",
      "module": false,
      "file": {
        "path": "src/routes/projects",
        "dir": "src/routes",
        "base": "projects",
        "ext": "",
        "name": "projects"
      },
      "children": [
        {
          "meta": {
            "isDefault": true
          },
          "id": "_default_projects_index_svelte",
          "name": "index",
          "file": {
            "path": "src/routes/projects/index.svelte",
            "dir": "src/routes/projects",
            "base": "index.svelte",
            "ext": ".svelte",
            "name": "index"
          },
          "asyncModule": () => import('../src/routes/projects/index.svelte'),
          "children": []
        }
      ]
    }
  ]
}
export default routes