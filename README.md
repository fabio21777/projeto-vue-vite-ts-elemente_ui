## Descrição

Este projeto é apenas para fins de aprendizado. Foi baseado no tutorial do desenvolvedor Ben do canal BenCodeZen. Aqui está o link para o vídeo(https://youtu.be/p1eO5dZnp_Q). Foram utilizados os componentes do Element Plus, como inputs, botões e validações de formulário.

## Criação do projeto 

### criando projeto vue com vite

```shell 
npm create vue@3
```


### Instalando elemente ui 

```shell 
npm install element-plus --save
```

#### Instalando import sob demanda

Para instalar as dependências necessárias para importar os componentes do Element Plus sob demanda, execute o seguinte comando:

```shell 
npm install -D unplugin-vue-components unplugin-auto-import
```

Após a instalação, adicione o seguinte código ao arquivo vite.config.ts:

```typescript 
// vite.config.ts
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  // ...
  plugins: [
    // ...
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
})

link para instalação elemente plus e import sob demanda
-https://element-plus.org/en-US/guide/installation.html
-https://element-plus.org/en-US/guide/quickstart.html



```
## iniciando projeto 

```shell 
cd <your-project-name>
npm install
npm run dev
```