import Product from './src/Product';
import Scales from './src/Scales';
import ScalesStorageEngineArray from './src/ScalesStorageEngineArray';
import ScalesStorageEngineLocalStorage from './src/ScalesStorageEngineLocalStorage';

const scale: Scales<ScalesStorageEngineArray> = new Scales<ScalesStorageEngineArray>(ScalesStorageEngineArray);

scale.add(new Product('1яблоко 1', 20));
scale.add(new Product('помидор 1', 30));
scale.add(new Product('яблоко 2', 50));
scale.add(new Product('помидор 2', 40));
scale.add(new Product('яблоко 3', 70));
scale.add(new Product('помидор 3', 30));
scale.add(new Product('яблоко 4', 90));
scale.add(new Product('помидор 4', 20));
scale.add(new Product('яблоко 5', 60));
scale.add(new Product('помидор 5', 30));

console.log('Список названий', scale.getNameList());
console.log('Итоговый вес', scale.getSumScale());

const scale2: Scales<ScalesStorageEngineLocalStorage> = new Scales<ScalesStorageEngineLocalStorage>(ScalesStorageEngineLocalStorage);

scale2.add(new Product('ананас 1', 10));
scale2.add(new Product('грейпфрут 1', 20));
scale2.add(new Product('ананас 2', 30));
scale2.add(new Product('грейпфрут 2', 40));
scale2.add(new Product('ананас 3', 40));
scale2.add(new Product('грейпфрут 3', 50));
scale2.add(new Product('ананас 4', 60));
scale2.add(new Product('грейпфрут 4', 70));
scale2.add(new Product('ананас 5', 80));
scale2.add(new Product('грейпфрут 5', 90));

console.log('Список названий', scale2.getNameList());
console.log('Итоговый вес', scale2.getSumScale());