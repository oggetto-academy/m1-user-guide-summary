# Inventory
Управление запасами (`Managing Stock`) продуктов создает возможности для отображая сообщения о наличии товара в вашем магазине и предоставляя своим клиентам возможность получать уведомления о продуктах. 
Настройки инвентаризации могут быть сделаны для каталога в целом и настроены для каждого отдельного продукта. Помимо контроля запасов, параметры инвентаризации позволяют
продавать продукты, которые отсутствуют на складе в момент создания заказа, а так же контролировать возврат товаров. Каждый продукт в вашем каталоге имеет как краткую, 
так и полную версию опций инвентаризации, в зависимости от того, нужно ли вам управлять инвентарем для конкретного продукта. 


__Чтобы зайти в настройки инвентаря:__
* В Admin menu выберите `System > Configuration`;
* На панели слева, под разделом `Catalog`, выберите `Inventory`;

__Или можно управлять инвентарём изнутри продукта__:
* В Admin menu выберите `Catalog > Manage Products` и откройте продукт в режиме редактирования (`edit`);
* На панели слева выберите `Inventory`;

__Благодаря инвентарю можно:__
* Как включить, так и отключить отслеживание количества товаров на складе;
* Определить при каком минимальном уровне запаса товара считается что он отсутствует на складе; 
* Установить минимальное (для группы клиентов) и максимальное количество товара, которое клиент может добавить в корзину;
* Настроить уведомление о том, что запас товара упал ниже порогового значения;

а так же:
* По умолчанию у конфигурируемых товаров нет собственного управление запасами (т.к. каждый их товар-опция имеет собственное управление запасами), но его можно включить принудительно; 
* Можно разрешить клиентам подписываться на уведомления по электронной почте о изменении цены определенного товара и о появлении товара на складе (ссылка на подписку появляется 
только на страницах товаров, которые отсутствуют на складе);
* Для уведомлений можно установить шаблон и адрес отправителя;
* Magento может проверять информацию о товаре для отправки этих уведомлений с определенной частотой: раз в день, раз в неделю или раз в месяц. Также можно определить время дня, 
в которое начнется рассылка (часы : минуты : секунды);
* Можно также установить шаблон и отправителя письма, которое будет отправлено если запланированная рассылка не удалась