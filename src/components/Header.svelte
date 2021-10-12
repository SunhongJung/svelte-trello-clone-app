<header>
    <img 
        src="/images/trello-logo.svg" 
        alt="Trello" 
        class="logo" 
    />
</header>

<style lang="scss">
    header {
        height: 40px;
        box-sizing: border-box;
        background-color: rgba(black,.4);
        display: flex;

        // autoprefixer 로 대체
        // display: --ms-flexbox;      // ms browser
        // display: -webkit-flex;      // chrome 
        // display: -moz-box;          // mozzila
        justify-content: center;
        align-items: center;

        img.logo {
            width: 80px;
            opacity: 0;
        }
    }
</style>