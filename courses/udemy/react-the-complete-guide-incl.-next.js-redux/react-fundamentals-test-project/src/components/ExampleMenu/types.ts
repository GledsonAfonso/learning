interface ExampleItem {
  title: string;
  description: string;
  code: string;
}

export interface Example {
  [key: string]: ExampleItem;
}
