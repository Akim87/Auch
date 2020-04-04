# auch

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Endpoints

podcasts = [
  {
    id: Number,
    title: String,
    description: String,
    coverImgLink: String,
    hostName: String,
    staff: [
      {
        [String]: String,
        Name: String
      },
    ],
    outerServices: [
      {
        name: String,
        link: String,
        imgLink: String,
      },
    ],
    episodes: [
      {
        id: Number,
        title: String,
        description: String,
        date: String(?),
        audioFileLink: String,
      },
    ],
  },
],

blogs = [
  {
    id: Number,
    title: String,
    description: String,
    coverImgLink: String,
    titleImgLink: String,
    illustrations: []
    staff: [
      {
        [String]: String,
        Name: String,
      },
    ],
  },
],