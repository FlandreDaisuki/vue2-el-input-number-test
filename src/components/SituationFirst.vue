<template>
  <div class="situation-first">
    <el-form ref="formEl" :model="form">
      <h2>Situation 1st</h2>
      <p>
        Just use <code>required</code> in &lt;el-form-item&gt;
      </p>
      <div class="form-row">
        <el-form-item prop="number" required label="0-100">
          <el-input-number
            v-model="form.number"
            controls-position="right"
            :min="0"
            :max="100"
            :step="1"
          />
        </el-form-item>
        <el-button class="ml-4" type="danger" @click="reset">Reset</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
import { ref } from 'vue-demi';

export default {
  name: 'SituationFirst',
  setup() {
    const form = ref({});
    const formEl = ref(null);
    const reset = () => {
      delete form.value.number;
      formEl.value?.resetFields();
    };
    return {
      form,
      formEl,
      reset,
    };
  },
};
</script>

<style scoped>
.form-row {
  display: flex;
  align-items: flex-start;
}
.ml-4 {
  margin-left: 1rem;
}

::v-deep .el-form-item {
  display: inline-flex;
}
</style>
