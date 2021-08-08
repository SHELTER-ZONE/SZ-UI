# SZBadge
<!-- Type -->
<Block title="Type" :gap="50">
  <SZBadge data="Hello" type="primary">
    <SZButton>primary</SZButton>
  </SZBadge>

  <SZBadge data="0" type="warning">
    <SZButton outline type="primary">warning</SZButton>
  </SZBadge>

  <SZBadge data="999+" type="danger">
    <SZButton type="primary">danger</SZButton>
  </SZBadge>
</Block>

<details class="code-area">
<summary class="show-code-btn">Show Code</summary>

```html
  <SZBadge data="Hello" type="primary">
    <SZButton>primary</SZButton>
  </SZBadge>

  <SZBadge data="0" type="warning">
    <SZButton outline type="primary">warning</SZButton>
  </SZBadge>

  <SZBadge data="999+" type="danger">
    <SZButton type="primary">danger</SZButton>
  </SZBadge>
```
</details>

### Props
| Props    | Types    | description
| ---------| ---------| -------
| data     | String   | badge content
| type     | String   | primary / warning / danger


<script>
import Block from '/docs/components/Block.vue'
import { SZBadge, SZButton } from 'shelter-zone-ui'
export default {
  components: {
    Block,
    SZBadge,
    SZButton,
  }
}
</script>

<style>
table {
    width:100%;
}
</style>