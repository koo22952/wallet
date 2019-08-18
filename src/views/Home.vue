<template>
  <div class="home">
    <div class="orderInfo">
      <div class="orderInfo_List">
        <div class="orderInfo_List-meg">
          <p class="meg_title">訂單資訊</p>
          <div class="meg_content" v-for="item in orderInfo">
            <span class="title">{{item.title}}</span>
            <p class="item">{{item.content}}</p>
          </div>
        </div>
        <button class="orderInfo_List-btn">返回商店</button>
      </div>
    </div>
    <div class="right">
      <div class="progressBar">
        <div class="linear_line"></div>
        <div class="first_round">1</div>
        <div class="second_round">2</div>
        <div class="third_round">3</div>
      </div>
      <div class="step">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import Step1 from '../components/Step1'
  export default {
    name: 'Home',
    components: {
      Step1,
    },
    data() {
      return {
        orderInfo: [
          {
            title: '商品名稱：',
            content: 'Iphone XR手機殼 x1',
          },
          {
            title: '訂單編號：',
            content: '17485739',
          },
          {
            title: '訂單金額：',
            content: 'NT$ 600',
          }
        ],
      }
    }
  }
</script>

<style lang="scss" scoped>
  .home {
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: center;

    .orderInfo {
      width: 234px;
      margin-top: 120px;
      display: inline-block;
      &_List {
        width: 100%;
        &-meg {
          height: 281px;
          background: #f3f3f3;
          border-radius: 10px 0 0 10px;
          padding: 24px 0 0 26px;
          margin-bottom: 24px;
          & .meg_title {
            font-size: 18px;
            color: #000000;
            margin-bottom: 14px;
            letter-spacing: 1.88px;
            line-height: 27px;
            font-weight: 800;
          }
          & .meg_content {
            margin-bottom: 1rem;
            & .title,
            & .item {
              color: #000000;
              letter-spacing: 1.67px;
              line-height: 24px;
              font-weight: 600;
            }
            & .title {
              color: #5e5e5e;
            }
          }
        }
        &-btn {
          @include btn($bgColor: #4b4b4b);
        }
      }
    }
    & .right {
      width: 628px;
      display: flex;
      flex-direction: column;
      align-items: center;
      & .progressBar {
        width: 300px;
        min-height: 120px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        & .linear_line {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: calc(100% - 70px);
          height: 3px;
          background-image: linear-gradient(270deg, #d8d8d8 70%, $main-color);
        }
        & .first_round,
        & .second_round,
        & .third_round {
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          font-size: 20px;
          color: #ffffff;
          background: #d8d8d8;
        }
        & .first_round {
          background: $main-color;
        }
      }
      & .step {
        height: 100%;
        width: 100%;
        background-color: #fff;
        box-shadow: 0 2px 14px 0 rgba(0, 0, 0, 0.08);
        border-radius: 0 10px 0 0;
        padding: 38px 30px 30px;
      }
    }
  }

  @media (max-width: 825px) {
  }
</style>