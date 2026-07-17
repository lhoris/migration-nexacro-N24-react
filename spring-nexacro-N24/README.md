# spring-nexacro-N24

## Getting started

해당 프로젝트는 Spring Framework 5.2.4 버전에 Nexacro-N24 버전(2024.2.27.1(24.0.0.200)) 라이브러리로 작성된 Demo 사이트를 포함합니다.  
뼈대 프로젝트로 사용하시길 바랍니다.

### 요구 버전

- **Java**: JDK 8 이상 (pom.xml의 `maven-compiler-plugin` source/target이 `1.8`로 고정 — 그 이상 버전 JDK로 빌드해도 바이트코드는 1.8 호환으로 생성됨)
- **Maven**: 3.6 이상 (엄격한 최소 버전 강제는 없음, pom.xml에 버전 강제 플러그인 없음)
- **WAS**: JBoss WAS(운영) / Tomcat 9.x 계열(로컬 개발) — 마이너·패치 버전은 무관

1. Clone Project
```
git clone https://github.com/lhoris/spring-nexacro-N24.git
```

2. Maven Package
```
mvn package
```

3. Run Tomcat(또는 JBoss WAS)
4. connect to http://localhost:8080/nexacro/launch.html


## UI Source(Nexacro)
### 해당 프로젝트의 UI소스는 넥사크로N 데모 사이트 UI 소스가 원본입니다
[넥사크로N 데모 사이트](https://demo.tobesoft.com/)

## 버전 정보
- **Product Version** : 24.0.0.200
- **File Version** : 2024.2.27.1
