<template>
   <section class="block">
     <span>{{title}}</span>
     <div class="content">
      <slot/>
     </div>
   </section>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'Block',
    props: {
      title: String,
    }
})
</script>

<style scoped>
.block {
  font-size: 30px;
  border: solid 1px lightgray;
  border-radius: 5px 5px 0 0;
  padding: 10px 15px;
}

.content {
  display: flex;
  padding: 50px;
  gap: 10px;
  justify-content: center;
  align-items: center;
}
</style>