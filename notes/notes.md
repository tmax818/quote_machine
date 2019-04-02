# Step 1

## add to gitignore

```Bash
# Ignore public, as it is built on deploy
# Place files for /public in /client/public
/public
```

# Step 2

app/contorllers/application_controller.rb should look like this:

```Ruby
class ApplicationController < ActionController::Base
    protect_from_forgery with: :exception
end

```

create app/contorllers/api_controller.rb
Not entirely sure why...

```Ruby
class ApiController < ActionController::API
end
```

Add this to config/application.rb and don't forget to uncomment `require "sprockets/railtie"` or it'll fuck everything up!

```Ruby

...
require "sprockets/railtie"
...
config.app_generators.scaffold_controller = :scaffold_controller

# Middleware for ActiveAdmin
config.middleware.use Rack::MethodOverride
config.middleware.use ActionDispatch::Flash
config.middleware.use ActionDispatch::Cookies
config.middleware.use ActionDispatch::Session::CookieStore
end
```

Paste this into the gemfile

```Ruby

#remember to take this shit out:

, '>= 0.18', '< 2.0'

...
group :production do
  # Use postgres as the database for production
  gem 'pg'
end

# ActiveAdmin
gem 'devise'
gem 'activeadmin'

...
```

Using Postgresql!!! don't forget!!

```Bash
rails db:create
```

then this shit!

```Bash
bundle
bin/rails g active_admin:install

```

```Bash
bin/rake db:migrate db:seed

```

# Step 2

```JavaScript
npx create-react-app client
```

Take this shit out:

```JavaScript
import registerServiceWorker from './registerServiceWorker';
registerServiceWorker();
```

This next one made me fall in love with Yarn

```Bash
yarn --cwd client start
```

add this to `client/package.json`

```JavaScript
"proxy": "http://localhost:3001",
```

Don't forget the comma (,) bitch-boy!

## FCC tests:

add this to the bottom of body in `client/public/index.html`

```HTML
<script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
```

### Database time!

Take this out of the seed file:

```Ruby
if Rails.env.development?
```

this works in Atom but not Code???

```Bash
rails g scaffold Topic title:string
rails g scaffold Fact topic:references quote:string
```

app/models/topic.rb

```Ruby
class Topic < ApplicationRecord
  has_many :facts
end
```
