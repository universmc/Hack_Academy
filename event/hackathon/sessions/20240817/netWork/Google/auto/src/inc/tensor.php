<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>TensorFlow.js browser example</title>

    <!-- Load TensorFlow.js from a script tag -->
    <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@latest/dist/tf.min.js"></script>
  </head>
  <body>
    <h1>TensorFlow.js example</h1>
    <h2>Open the console to see the results.</h2>
    <script>
    // Define a model for linear regression. The script tag makes `tf` available
    // as a global variable.
    const model = tf.sequential();
    model.add(tf.layers.dense({units: 1, inputShape: [1]}));

    model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

    // Generate some synthetic data for training.
    const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
    const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);

    // Train the model using the data.
    model.fit(xs, ys, {epochs: 10}).then(() => {
      // Use the model to do inference on a data point the model hasn't seen before:
      model.predict(tf.tensor2d([5], [1, 1])).print();
      // Open the browser devtools to see the output
    });
    </script>
  </body>
</html>
