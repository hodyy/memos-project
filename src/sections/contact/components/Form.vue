<script setup lang="ts"></script>
<template>
  <form>
    <div class="name-budget">
      <div class="form-group">
        <label for="input-name">YOUR NAME</label>
        <input
          id="input-name"
          type="text"
          placeholder="First name"
        />
      </div>
      <div class="form-group">
        <label for="budget">Budget</label>
        <select id="budget">
          <option value="500">$500</option>
          <option value="1000">$1000</option>
          <option value="1500">$1500</option>
        </select>
      </div>
    </div>
    <div class="form-group">
      <label for="input-email">INPUT FIELD</label>
      <input
        id="input-email"
        type="email"
        placeholder="name@mail.com"
      />
    </div>
    <div class="form-group">
      <label>YOUR MASSAGE</label>
      <textarea placeholder="Message" />
    </div>
    <div class="checkbox-group-wrapper">
      <div class="checkbox-group">
        <input
          id="checkbox"
          type="checkbox"
          checked
        />
        <span class="checkbox-label">Send me a copy</span>
      </div>
      <button type="submit">Send</button>
    </div>
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 470px;
  height: 570px;
  background-color: #ffffff;
  border-radius: 10px;
  gap: 30px;
}
input {
  box-sizing: border-box;
  height: 50px;
  border-radius: 100px;
  border: 2px solid #ebeaed;
  padding: 12px 24px;
}
#input-name {
  width: 200px;
}
#input-email {
  width: 370px;
}
textarea {
  box-sizing: border-box;
  width: 370px;
  height: 110px;
  border-radius: 10px;
  border: 2px solid #ebeaed;
  padding: 13px 19px;
  resize: none;
}
select {
  box-sizing: border-box;
  width: 140px;
  height: 50px;
  border-radius: 100px;
  border: 2px solid #ebeaed;
  padding: 12px 24px;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: 0;
  color: #1e0e62;
}
input::placeholder,
textarea::placeholder {
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: 0;
  color: #15143966;
}
label {
  font-weight: 700;
  font-size: 14px;
  line-height: 26px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #1e0e62;
}
.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.checkbox-group-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 99px;
}
.checkbox-group {
  display: flex;
  gap: 12px;
}

.name-budget {
  height: 100px;
  display: flex;
  gap: 30px;
}

input[type='checkbox'] {
  height: 20px;
  width: 20px;
}

button {
  width: 120px;
  height: 50px;
  border-radius: 100px;
  background-color: #25dac5;
  color: white;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: 0;
  border: none;
}

.checkbox-label {
  color: #15143966;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0;
}
</style>
