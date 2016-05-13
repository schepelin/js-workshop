# Exercises for language basics

## Install nodejs

```
curl -sL https://deb.nodesource.com/setup_5.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt-get install -y build-essential
```

## Install requirements

Run in shell

```
sudo npm install --global babel-cli
npm install
```

## How to run tests

To run all tests

```
npm test
```

To run specific topic's tests

```
make test_<topic>
```

Topic can be `arrays`, `functions`, `objects`, `strings`

Example: `make test_arrays`
