## Chrome을 이용해서 Node.js 디버깅 방법을 알아봅니다.

### Node.js Inspector 활성화

Node.js를 `--inspect`와 함께 실행하면, Node.js 프로세스가 디버깅 클라이언트를 기다립니다. 기본적으로 `127.0.0.1:9229`에 실행됩니다. Node.js 인스펙터에 연결하기 위한 다양한 클라이언트가 준비되어 있습니다.

**인스펙터 클라이언트**

- node-inspect
- **Chrome Devtools**
- Visual Studio / Visual Studio Code
- WebStorm
- Gitpod
- Ecplipse

### Chrome DevTools로 Node.js 디버깅하기

1. 다음의 코드로 Node.js 인스펙터를 활성화합니다.

```zsh
node --inspect-brk main.js # main.js를 디버깅
```

> `--inspect`와 달리 `--inspect-brk`는 코드가 시작되자마자 브레이크포인트가 실행됩니다. 미리 브레이크포인트를 설정할 수 없는 경우 사용합니다.

2. Chrome의 URL창에 `chrome://inspect`를 입력하여 Chrome DevTools의 inspect를 실행합니다.

![DevTools](https://user-images.githubusercontent.com/19797697/86321672-6da54f80-bc74-11ea-8768-f16dd4181162.png)

3. Remote Target에 로드된 `main.js` 파일의 **inspect** 버튼을 클릭합니다.

4. Chrome DevTools가 실행되고 디버깅을 시작합니다.

![DevTools](https://user-images.githubusercontent.com/19797697/86322030-24093480-bc75-11ea-95f9-8f7a639f1ae8.png)

> Chrome Debugger 사용법은 [이 문서](https://github.com/woowa-techcamp-2020/jhaemin-sss5793-haerang94-learn-node/blob/master/doc/chrome-debugger.md)에 기술되어있습니다.

### 참조

- [Official Node.js Debugging Guide](https://nodejs.org/en/docs/guides/debugging-getting-started/)
- [StackOverflow](https://stackoverflow.com/questions/11611162/how-to-debug-node-js-app-with-breakpoints-and-everything)
