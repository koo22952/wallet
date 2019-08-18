<template>
  <div class="wrapper">
    <div class="title">STEP1. 選擇付款方式</div>
    <div class="selectCard">
      <div
        class="cards"
        v-for="(item, index) in cards"
        :key="item.pic+index"
        @click="handleClick(item.pic)"
        :class="mainPayment === item.pic ? 'active': ''"
      >
        <component :is="item.pic" class="cardImg"></component>
        <span class="cardTitle">{{item.title}}</span>
      </div>
    </div>
    <div class="nextBtn">
      <div :class="mainPayment ? 'active': ''" @click="handleGoto">下一步</div>
    </div>
  </div>
</template>

<script>
  import creditcard from './svg/credit-card'
  import unionPay from './svg/union-pay'
  import shop from './svg/shop'
  import webAtm from './svg/web-atm'
  import atm from './svg/atm'
  export default {
    name: 'Step1',
    components: {
      creditcard,
      unionPay,
      shop,
      webAtm,
      atm
    },
    data() {
      return {
        cards: [
          {
            title: '信用卡/金融卡',
            pic: 'creditcard',
            path: 'credit-card'
          },
          {
            title: '銀聯卡',
            pic: 'unionPay',
            path: 'credit-card'
          },
          {
            title: '超商付款',
            pic: 'shop',
            path: '/web-shop'
          },
          {
            title: 'Web ATM',
            pic: 'webAtm',
            path: '/web-shop'
          },
          {
            title: 'ATM 轉賬',
            pic: 'atm',
            path: '/web-shop'
          },
        ],
        mainPayment: ''
      }
    },
    methods: {
      handleClick(item) {
        this.mainPayment = item
      },
      handleGoto() {
        if (!this.mainPayment) return

        if (this.mainPayment === 'creditcard' || this.mainPayment === 'unionPay') {
          this.$router.push({ name: 'credit-card', params: { payment: `${this.mainPayment}` } })
        } else {
          this.$router.push({ name: 'web-shop', params: { payment: `${this.mainPayment}` } })
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
      @include stepTitle;
    }
    .selectCard {
      margin-top: 70px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      .cards {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 161px;
        height: 139px;
        background: #f7f7f7;
        border-radius: 5px;
        margin: 11px 7.5px;
        cursor: pointer;

        &:hover {
          background: $second-color;
          opacity: 0.7;
          color: #ffffff;
          fill: #ffffff;
        }
        .cardImg {
          width: auto;
          height: 55px;
        }
        .cardTitle {
          font-size: 14px;
          letter-spacing: 1.46px;
          margin-top: 14px;
        }
      }
    }
    .nextBtn {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      > div {
        margin-top: 36.5px;
        margin-right: 28px;
        @include btn($opa: 0.7);
      }
    }
    .active {
      background: $second-color !important;
      color: #ffffff;
      fill: #ffffff;
      opacity: 1 !important;
      &:hover {
        opacity: 1;
      }
    }
  }
</style>