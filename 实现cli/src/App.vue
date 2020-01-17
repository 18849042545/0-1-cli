<template>
 <div>
   <h1>我是执行程序 ---- {{$store.state.number}}</h1>
   <h1>{{message}}    </h1>
   <router-view/>
 </div>
</template>

<style lang="scss" scoped>
h1{
  color: red
}
</style>

<script>
export default {
  data(){
    return {
      message:' Hellow Word'
    }
  }
}
</script>