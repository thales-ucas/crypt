<template>
  <div class="crypt">
    <header>
      <article>
        <h1>rsa</h1>
        <p>不对称加密</p>
      </article>
    </header>
    <main>
      <article>
        <section>
          <h2>原始密码</h2>
          <p><input v-model="form.origin" /></p>
          <p><button @click="onEncrypt">加密</button></p>
        </section>
        <section>
          <h2>加密密码</h2>
          <p><input v-model="form.encrypt" /></p>
          <p><button @click="onDecrypt">解密</button></p>
        </section>
        <section>
          <h2>解密密码</h2>
          <p><input v-model="form.decrypt" /></p>
        </section>
      </article>
    </main>
    <footer>
      <article>
        <section>
          <h2>公钥</h2>
          <p>
            <textarea v-model="rsa.publicKey" rows="10"></textarea>
          </p>
        </section>
        <section>
          <h2>私钥</h2>
          <p>
            <textarea v-model="rsa.privateKey" rows="10"></textarea>
          </p>
        </section>
      </article>
    </footer>
  </div>
</template>
<script lang="ts" setup>
import { useCrypt } from '@/store';
import { computed, onMounted } from 'vue';
const store = useCrypt();
const form = computed(() => store.form);
const rsa = computed(() => store.rsa);
function onEncrypt() {
  form.value.encrypt = store.encode(form.value.origin);
}
function onDecrypt() {
  form.value.decrypt = store.decrypt(form.value.encrypt);
}
</script>
<style lang="scss" scoped>
.crypt {
  header {
    text-align: center;
  }
  main {
    article {
      border-bottom: solid 1px #000;
      padding-bottom: 2em;
      section {
        border: dashed 1px #000;
        padding: 1em;
      }
    }
  }
  footer, main {
    max-width: 800px;
    margin: 0 auto;
    article {
      display: flex;
      justify-content: space-between;
      section {
        textarea {
          width: 20em;
        }
      }
    }
  }
}
</style>
