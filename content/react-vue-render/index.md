---
title: 'React, Vue 의 렌더링'
description: 'SPA 의 대표적인 툴들인 React 와 Vue 의 렌더링의 차이와 과정 에 대한 이야기'
date: '2024-03-12'
tag: ['React', 'Vue']
post_image: './original-b1864e0b2e914e7f7480edbdf60bef1e.png'
post_image_alt: '대체 텍스트'
post_image_credit_text: 'Adrian Fernandez'
post_image_credit_link: 'https://dribbble.com/shots/20115776-Vue-x-React-Differences'
---

SPA(Single Page Application) 개발에서 React와 Vue는 가장 인기 있는 프레임워크입니다. 두 프레임워크 모두 가상 DOM을 사용하여 효율적인 렌더링을 제공하지만, 렌더링 방식과 과정에서 몇 가지 주요 차이점을 가지고 있습니다.

본 글에서는 React와 Vue의 렌더링 방식을 심층적으로 비교하고, 각 프레임워크의 장단점을 분석하며, 최적의 렌더링 성능을 위한 팁을 제공합니다.

## 렌더링 방식 비교

1. 가상 DOM 비교

   - React: Fiber 아키텍처를 기반으로 트리 구조의 가상 DOM을 사용하여 변화를 추적하고 최소한의 DOM 업데이트를 수행합니다.
   - Vue: Watcher API를 사용하여 데이터 변화를 감지하고 반응적으로 DOM을 업데이트합니다.
   - 핵심 차이점:
     - React: Fiber는 효율적인 업데이트를 위해 배치 알고리즘을 사용하여 변화를 일괄적으로 처리합니다.
     - Vue: Watcher API는 각 데이터 변화에 대한 개별 처리를 수행합니다.

2. 템플릿 방식 비교
   - React: JSX를 사용하여 템플릿을 정의하고 컴포넌트를 빌드합니다.
   - Vue: HTML 템플릿에 직접 데이터 바인딩을 사용하거나 SFC(Single File Component)를 사용하여 템플릿을 정의합니다.
   - 핵심 차이점:
     - React: JSX는 JavaScript 코드 내에 템플릿을 포함하여 직관적인 개발 경험을 제공합니다.
     - Vue: HTML 템플릿은 친숙하고 직관적인 방식으로 템플릿을 정의하지만, JSX만큼 강력하지 않습니다.

## 렌더링 과정 비교

1. 초기 렌더링:

   - React: 가상 DOM을 생성하고 DOM 트리에 삽입하여 초기 페이지를 렌더링합니다.
   - Vue: 데이터를 reactive 객체에 저장하고 템플릿을 렌더링하여 초기 페이지를 렌더링합니다.

2. 변화 감지:

   - React: Fiber는 변화를 추적하고 업데이트를 스케줄링합니다.
   - Vue: Watcher API는 데이터 변화를 감지하고 템플릿을 다시 렌더링합니다.

3. DOM 업데이트:
   - React: Fiber는 최소한의 DOM 업데이트를 수행하도록 최적화되어 있습니다.
   - Vue: Watcher API는 변화된 부분만 업데이트하도록 최적화되어 있지만, React만큼 효율적이지 않을 수 있습니다.

## 장단점 비교

React

장점:

- 효율적인 DOM 업데이트
- 직관적인 JSX 템플팅
- 강력한 컴포넌트 시스템
- 풍부한 커뮤니티 및 라이브러리

단점:

- 초기 학습 곡선이 다소 높음
- JSX 사용으로 인해 HTML 템플팅에 대한 불편함

Vue

장점:

- 친숙하고 직관적인 HTML 템플팅
- 쉬운 학습 곡선
- 작고 가벼운 프레임워크

단점:

- React만큼 효율적인 DOM 업데이트가 아님
- JSX만큼 강력한 컴포넌트 시스템이 아님
- 최적의 렌더링 성능을 위한 팁
- 변화 감지 최적화: 불필요한 변화 감지를 줄이고 성능 향상
- 메모이제이션: 렌더링 함수의 결과를 캐싱하여 반복 계산 방지
- 컴포넌트 분할: 큰 컴포넌트를 작은 컴포넌트로 분리하여 렌더링 트리를 줄임
- 키 추출: 리스트 렌더링 시 고정적인 키를 사용하여 DOM 재사용

### 결론

React와 Vue는 각자의 장단점을 가지고 있으며, 어떤 프레임워크가 더 나은지는 프로젝트 요구 사항과 개발자의 선호도에 따라 다름
