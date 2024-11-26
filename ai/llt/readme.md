### JavaScript `Math.random()` 函数笔记

#### 1. 基本概念
- **定义**：`Math.random()` 是 JavaScript 内置的 `Math` 对象提供的方法之一，用于生成一个介于 0（包含）和 1（不包含）之间的伪随机浮点数。
- **语法**：`Math.random()`
- **返回值**：一个介于 0 到 1 之间的浮点数，不包括 1。

#### 2. 使用示例
- **生成随机数**：
  ```javascript
  console.log(Math.random()); // 输出类似于 0.3843577592873024 的随机数
  ```

#### 3. 生成指定范围内的随机数
- **生成指定范围内的随机整数**：
  ```javascript
  function getRandomInt(min, max) {
      min = Math.ceil(min); // 向上取整
      max = Math.floor(max); // 向下取整
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // 示例：生成1到10之间的随机整数
  console.log(getRandomInt(1, 10)); // 输出可能是 1, 2, ..., 10
  ```

- **生成指定范围内的随机浮点数**：
  ```javascript
  function getRandomFloat(min, max) {
      return Math.random() * (max - min) + min;
  }

  // 示例：生成1.0到10.0之间的随机浮点数
  console.log(getRandomFloat(1.0, 10.0)); // 输出可能是 1.3843577592873024, 5.6789, 等等
  ```

#### 4. 注意事项
- `Math.random()` 每次调用都会返回一个新的随机数。
- 生成的随机数是伪随机数，意味着它们是由确定性算法生成的，不是真正的随机数。
- 如果需要更高质量的随机数，可以考虑使用浏览器提供的 `crypto` API，如 `window.crypto.getRandomValues()`。

#### 5. 应用场景
- **游戏开发**：生成随机事件或随机奖励。
- **数据处理**：生成测试数据或进行数据随机化处理。
- **安全应用**：生成临时密钥或令牌（尽管通常会使用更安全的方法）。