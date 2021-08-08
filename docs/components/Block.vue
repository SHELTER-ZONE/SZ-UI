<template>
   <section class="block">
     <span>{{title}}</span>
     <div class="content" :style="`gap:${gap}px`">
      <slot/>
     </div>
   </section>
</template>

<script>
export default {
    name: 'Block',
    props: {
      title: String,
      gap: {
        type: Number,
        default: 10,
      }
    }
}
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