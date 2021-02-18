FROM php:7.4-fpm-alpine

RUN set -eux && \
    apk --no-cache add \
        ${PHPIZE_DEPS} \
        postgresql-dev \
        libzip-dev \
        libpng \
        libpng-dev \
        libjpeg-turbo-dev && \
    # configure
    docker-php-ext-configure gd --with-jpeg=/usr/include/ && \
    docker-php-ext-configure opcache --enable-opcache && \
    # php ext install
    docker-php-ext-install \
        opcache \
        bcmath \
        pdo_mysql \
        gd \
        exif \
        zip && \
    # xdebug isntall
    pecl install xdebug-2.9.6 && \
    docker-php-ext-enable xdebug && \
    cp /usr/local/etc/php/php.ini-development /usr/local/etc/php/php.ini

COPY xdebug.ini /usr/local/etc/php/conf.d/xdebug.ini
