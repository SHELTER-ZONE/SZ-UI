# SZFileDrop
<!-- Type -->

<Block title="Type">
  <div class="drop-area">
    <SZFileDrop  content="Drop Here" />
  </div>
</Block>

<details class="code-area">
<summary class="show-code-btn">Show Code</summary>

```html
<div class="drop-area">
  <SZFileDrop content="Drop Here" />
</div>

<style>
  .drop-area {
    width: 500px;
    height: 200px;
    position: relative;
  }
</style>
```
</details>

### Props
| Props    | Types    | description
| ---------| ---------| -------
| content  | String   | Area text

<script>
import Block from '/docs/components/Block.vue'
import { SZFileDrop } from 'shelter-zone-ui'
export default {
  components: {
    Block,
    SZFileDrop,
  }
}
</script>

<style>
.drop-area {
    width: 500px;
    height: 200px;
    position: relative;
}
</style>