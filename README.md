# niyon-style-test

run ```yarn```

## To use locally
run ```yarn link``` in this project

use ```yarn link niyon-test``` in another react project, then use as use as usual i.e. ```import <component> from 'niyon-test```

##To use from npm
create a react app

```yarn add niyon-test```

```import <component> from 'niyon-test'```

#Components

##Card

```jsx
import { Card } from 'niyon-test';

<Card>
  text
</Card>
```

##Button

```jsx
import { Button } from 'niyon-test';

<Button>
  text
</Button>
```

* props

- outline: bool
- raised: bool
- variant: string - "primary" || "secondary"
