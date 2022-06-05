<template>
  <div class="content">
    <div class="wrapper">
      <div class="about__title">
        <h1>О компании</h1>
      </div>
      <div class="about__previous">
        <div class="about__previous-title">
          СПЕЦИАЛИЗАЦИЯ НАШЕЙ КОМПАНИИ - ОБРАБОТКА СТЕКЛА И ЗЕРКАЛА
        </div>
        <div class="about__previous-item">
          МЫ ВКЛАДЫВАЕМ В НАШИ ИЗДЕЛИЯ ВСЮ ДУШУ И СЕРДЦЕ. КОГДА СОТНИ ИЗДЕЛИЙ
          ПРОШЛИ ЧЕРЕЗ НАШИ РУКИ - МЫ УВЕРЕНЫ В ИХ КАЧЕСТВЕ.
        </div>
      </div>
      <div class="about__item">
        <div class="about__item-img">
          <img src="@/assets/image/glasprom.png" alt="" />
        </div>
        <div class="about__item-text">
          <p style="text-align: justify">
            <span style="font-size: 12pt; color: #000000">
              Компания "GLASSPROM" сегодня является лидирующей компанией на
              рынке с репутацией надежного партнера и эксперта в области не
              только выполнения комплексных услуг по обработке стекла, но и
              производителя качественной продукции из стекла и разнообразных
              стеклянных конструкций.
            </span>
          </p>
          <p style="text-align: left">
            <span style="color: #000000; font-size: 12pt">
              Мы готовы предложить нашим клиентам самые современные решения и
              передовые технологии в области обработки стекла и производства
              стеклянных конструкций.&nbsp;
            </span>
            <span style="font-size: 12pt; color: #000000">
              Возможности полного цикла обработки стекла в одном месте открывают
              неограниченные возможности для изготовления любых изделий самых
              сложных форм, в том числе и отдельного эксклюзивного дизайна.
            </span>
          </p>
          <p>
            <span style="font-size: 12pt; color: #000000">
              Мы готовы предложить Вам не только услуги по обработке стекла и
              зеркал, мы поможем с проектом, монтажем и доставкой.
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about__title {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
}
.about__previous-title {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  font-size: 24px;
  font-weight: 500;
}
.about__previous {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.about__previous-item {
  font-size: 14px;
}
.about__item {
  display: flex;
  flex-direction: row;
  padding: 40px 0;
  align-items: center;
}
.about__item-img img {
  width: 600px;
  padding: 0px 40px 40px 0px;
  border-radius: 40px;
}
</style>
