FROM ubuntu:focal

WORKDIR /app

RUN apt-get update
RUN apt-get install -y ruby-full build-essential zlib1g-dev git locales

RUN sed -i '/en_US.UTF-8/s/^# //g' /etc/locale.gen && \
    locale-gen
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US:en
ENV LC_ALL en_US.UTF-8

RUN echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
RUN echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
RUN echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc

WORKDIR /app/bagadb.github.io

RUN gem install bundler

CMD bash -c "./start.sh"

