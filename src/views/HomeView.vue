<template>
  <div class="home">
    <div class="wrapper">
      <div class="m-auto text">Paste contract code here</div>
      <div class="contract-box-outer">
        <textarea
          ref="contractData"
          class="contract-box"
          placeholder="PASTE CONTRACT CODE HERE..."
        />
      </div>
      <button @click="decode()" class="decode-action">DECODE IT</button>
      <div class="result" v-if="address != null && typeof address == 'object'">
        <span class="error">Error occured {{ address }}</span>
      </div>
      <div class="result" v-if="address != null && typeof address != 'object'">
        <div class="m-auto">
          Scammer address: <span class="address error">{{ address }}</span>
        </div>
        <div class="m-auto link-m">
          <a
            :href="'https://bscscan.com/address/' + address"
            target="_blank"
            class="link"
            >Open on bscscan.com</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { decode_honeypotV1 } from "@/contract-kinds/HoneyPotScamContractV1";

const contractData = ref<HTMLInputElement | null>(null);
const address = ref<string | null | Error>(null);

const decode = () => {
  try {
    address.value = decode_honeypotV1(contractData.value?.value);
  } catch (e) {
    // wrong contract?
    address.value = e;
  }
};
</script>

<style scoped>
.contract-box-outer {
  margin: 15px;
  margin-top: 0px;
  display: flex;
  min-height: 300px;
  padding-top: 10px;
}

.contract-box {
  border: solid 1px #1b1b1b;
  border-radius: 10px;
  background-color: #464646;
  color: #faf0e6;
  flex-grow: 1;
}

.decode-action {
  background-color: #464646;
  color: #faf0e6;
  border-radius: 15px;
  border: solid 1px #1b1b1b;
  padding: 10px;
  padding-left: 15px;
  padding-right: 15px;
  margin: 7px;
  width: 200px;
  transition: background-color 0.25s;
}

.decode-action:hover {
  background-color: #5e5e5e;
}

.result {
  margin-top: 15px;
  margin-bottom: 15px;
  color: #faf0e6;
}

.text {
  color: #faf0e6;
  font-weight: bold;
  padding-top: 10px;
}

.address {
  font-weight: bold;
}

.error {
  color: rgb(236, 92, 92);
}

.m-auto {
  margin: 0 auto;
}

.wrapper {
  background: rgb(44, 44, 44);
  margin: 0 auto;
  max-width: 550px;
  width: 100%;

  border: solid 1px #1b1b1b;
  border-radius: 10px;
  margin-top: 15px;
}

.link {
  color: rgb(62, 134, 230) !important;
}

.link-m {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>