import styled from "@emotion/styled";

export const Main = styled.main`
  .container {
    display: flex;
    position: relative;
    width: 100%;
  }

  .container.player {
    overflow: hidden;
  }

  .content {
    margin-top: 100px;
    width: 100%;
  }

  h1 {
    color: #e7e7e7;
    font-size: 90px;
    font-weight: 400;
    line-height: 105px;
    letter-spacing: 0px;
    padding-left: 52.5%;
  }

  .card-container {
    margin-top: 10px;
  }

  .card {
    padding: 60px 10% 60px 52.5%;
  }

  .card-1 {
    background: #f5f4f9;
  }

  .card-2 {
    background: #5e3db3;
  }

  .card-2.player {
    background: #090c35;
  }

  .index {
    color: #000;
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 1.5px;
    margin-right: 6px;

    &:after {
      content: "";
      float: left;
      background: #603ebe;
      width: 100%;
      height: 5px;
      border-radius: 5px;
    }
  }

  .index-2 {
    &:after {
      background: #fff;
    }
  }

  .index-2.player {
    color: #8f6be8;
  }

  h2 {
    display: flex;
    align-items: center;
    color: #c2c2c2;
    font-size: 36px;
    font-weight: 400;
    line-height: 42px;
    letter-spacing: 1.5px;
    margin-bottom: 20px;
  }

  .description {
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0px;
    text-align: left;
  }

  .description-2 {
    color: #fff;
  }

  h1.player {
    padding-left: 16.7%;
  }

  .card.player {
    padding: 60px 46% 60px 16.7%;
  }

  .image-container.athletes {
    position: absolute;
    top: 50px;
    left: 9%;
    width: calc(100vw - 64.7vw);
    z-index: 2;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .image-container.players {
    position: absolute;
    top: 10px;
    left: 41.9%;
    width: calc(100vw - 48vw);
    z-index: 2;

    img {
      width: 100%;
      height: 100%;
    }
  }

  @media (max-width: 1440px) {
    .container {
      flex-direction: column;
    }

    .content {
      margin-top: 50px;
    }

    h1 {
      padding-left: 37.9%;
    }

    h1.player {
      padding-left: 4%;
    }

    .card-container {
      margin-top: 15px;
    }

    .card {
      padding: 30px 4% 30px 37.9%;
    }

    .card.player {
      padding: 30px 37.9% 30px 4%;
    }

    .description {
      font-size: 18px;
    }

    .image-container.athletes {
      width: 518px;
      top: 70px;
      left: -161px;
    }

    .image-container.players {
      width: 691px;
      top: 31px;
      left: auto;
      right: -254px;
    }
  }

  @media (max-width: 767px) {
    overflow: hidden;

    .content {
      margin: 20px 0 0 20px;
    }

    h1 {
      padding-left: 0;
      font-size: 50px;
      line-height: 59px;
    }

    h1.player {
      padding-left: 0;
    }

    .image-container.athletes {
      width: 218px;
      top: 94px;
      left: 50%;
      transform: translateX(-50%);
    }

    .image-container.players {
      width: 302px;
      top: 94px;
      left: 50%;
      transform: translateX(-50%);
    }

    .card {
      padding: 60px 20px;
    }

    .card-2 {
      background: transparent;
    }

    h2 {
      font-size: 28px;
      line-height: 33px;
      letter-spacing: 1.5px;
      margin-bottom: 10px;
    }

    .description {
      font-size: 15px;
      line-height: 18px;
      letter-spacing: 0em;
    }

    .description-2 {
      color: #000;
    }

    .index {
      font-size: 14px;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: 1.5px;

      &:after {
        height: 4px;
        border-radius: 4px;
      }
    }

    .index-2 {
      &:after {
        background: #603ebe;
      }
    }

    .index-2.player {
      color: #000;
    }

    .carousel-root {
      margin-top: 251px;
    }

    .carousel-root.player {
      margin-top: 220px;
    }

    .slider-wrapper {
      background: #f5f4f9;
    }

    .control-dots {
      display: flex;
      justify-content: center;
      margin: 25px 0;

      .dot {
        width: 10px;
        height: 10px;
        margin: 0 6px;
        background-color: #d8d8d8;
        opacity: 1;
        box-shadow: none;
      }

      .selected {
        background-color: #5c3caf;
      }
    }

    .thumbs-wrapper {
      display: none;
    }
  }
`;
