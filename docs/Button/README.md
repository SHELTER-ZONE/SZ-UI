# SZButton
<!-- Type -->
<Block title="Type">
  <SZButton>normal</SZButton>
  <SZButton type="primary">primary</SZButton>
  <SZButton type="warning">warning</SZButton>
  <SZButton type="danger">danger</SZButton>
</Block>

<details class="code-area">
<summary class="show-code-btn">Show Code</summary>

```html
<SZButton>normal</SZButton>
<SZButton type="primary">primary</SZButton>
<SZButton type="warning">warning</SZButton>
<SZButton type="danger">danger</SZButton>
```
</details>

<!-- Outline -->
<Block title="Outline">
  <SZButton type="primary" outline>Button</SZButton>
</Block>

<details class="code-area">
<summary class="show-code-btn">Show Code</summary>

```html
<SZButton type="primary" outline>Button</SZButton>
```
</details>

<!-- Dashed -->
<Block title="Dashed">
  <SZButton type="primary" dashed>Button</SZButton>
</Block>

<details class="code-area">
<summary class="show-code-btn">Show Code</summary>

```html
<SZButton type="primary" dashed>Button</SZButton>
```
</details>

<script>
import Block from '/docs/components/Block.vue'
import {SZButton} from 'shelter-zone-ui'
export default {
  components: {
    Block,
    SZButton,
  }
}
</script>