import "./account.scss";

function AccountPage() {
    return ( 
        <div>
            <div class="container">
                <div class="background"></div>
                <div class="content">
                    <div class="profile">
                        <div class="profile-info">
                            <div class="profile-name">Rozikov Akmal Baxodirovich</div>
                            <div class="profile-image-container">
                                <div class="profile-image-background"></div>
                                <div class="profile-image-overlay"></div>
                                <img class="profile-image" src="https://via.placeholder.com/93x93" />
                            </div>
                        </div>
                    </div>
                    <div class="menu">
                        <div class="menu-item">
                            <div class="menu-item-background"></div>
                            <img class="menu-item-icon" src="" />
                            <div class="menu-item-text">Закладки</div>
                        </div>
                        <div class="menu-item">
                            <div class="menu-item-background"></div>
                            <img class="menu-item-icon" src="" />
                            <div class="menu-item-text">Изменить профиль</div>
                        </div>
                        <div class="menu-item">
                            <div class="menu-item-background"></div>
                            <img class="menu-item-icon" src="" />
                            <div class="menu-item-text">Уведомления</div>
                        </div>
                        <div class="menu-item">
                            <div class="menu-item-background"></div>
                            <img class="menu-item-icon" src="" />
                            <div class="menu-item-text">Тема</div>
                        </div>
                        <div class="menu-item">
                            <div class="menu-item-background"></div>
                            <img class="menu-item-icon" src="" />
                            <div class="menu-item-text">Язык</div>
                        </div>
                        <div class="menu-item">
                            <div class="menu-item-background"></div>
                            <div class="menu-item-text">Выйти из Аккаунта</div>
                        </div>
                        <div class="menu-item">
                            <div class="menu-item-background"></div>
                            <img class="menu-item-icon" src="" />
                            <div class="menu-item-text">Отзыв</div>
                        </div>
                        <div class="menu-item">
                            <div class="menu-item-background"></div>
                            <img class="menu-item-icon" src="" />
                            <div class="menu-item-text">Возможности</div>
                        </div>
                        <div class="menu-item">
                            <div class="menu-item-background"></div>
                            <img class="menu-item-icon" src="" />
                            <div class="menu-item-text">Соцподдержка</div>
                        </div>
                        <div class="menu-item">
                            <div class="menu-item-background"></div>
                            <img class="menu-item-icon" src="" />
                            <div class="menu-item-text">Вопросы</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default AccountPage;