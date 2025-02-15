source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '3.0.0'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 6.0.3', '>= 6.0.3.4'
# Use mysql as the database for Active Record
# Use Puma as the app server
gem 'puma', '~> 4.1'
# Use SCSS for stylesheets
gem 'sass-rails', '>= 6'
# Transpile app-like JavaScript. Read more: https://github.com/rails/webpacker
gem 'webpacker', '~> 4.0'
# Turbolinks makes navigating your web application faster. Read more: https://github.com/turbolinks/turbolinks
gem 'turbolinks', '~> 5'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.7'
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 4.0'
# Use Active Model has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use Active Storage variant
# gem 'image_processing', '~> 1.2'

# Reduces boot times through caching; required in config/boot.rb
gem 'bootsnap', '>= 1.4.2', require: false

# コード整形ツール
gem 'rubocop','~> 0.82.0', require: false

# ユーザーログイン管理
gem 'sorcery'

# 初期データの格納
gem 'seed-fu'

# グラフ
gem 'chart-js-rails', '~> 0.1.4'

# 定期実行
gem 'whenever', require: false

# 画像の加工
gem 'mini_magick', '~> 4.8'

#環境変数管理
gem 'dotenv-rails', groups: [:development, :production]

gem 'enum_help'

#twitter card
gem 'meta-tags', :require => 'meta_tags'

#スマートフォンに対応しているか
gem 'rack-user_agent'


group :development, :test do
  gem 'pg'
  # デバック関連
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'pry-rails'
  gem 'pry-byebug'
  gem 'pry-doc'
  #テスト関連
  gem 'rspec-rails'
  gem 'factory_bot_rails'
end

group :development do
  # Access an interactive console on exception pages or by calling 'console' anywhere in the code.
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '~> 3.2'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  # エラー画面の整形
  gem 'better_errors'
  gem 'binding_of_caller'
  # パスワードリセットをメールで確認
  gem 'letter_opener_web'
  # n+1問題の検知
  gem 'bullet'
end

group :production do
  gem 'pg'
  gem 'rails_12factor'
  gem 'google-analytics-rails'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
