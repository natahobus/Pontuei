# 🚀 Como Testar o App

## 1. **Limpar tudo e reinstalar**
```bash
# Deletar node_modules e reinstalar
rm -rf node_modules
npm install

# Limpar cache do Expo
npx expo start --clear
```

## 2. **Se Tailwind não funcionar**
Execute estes comandos na ordem:
```bash
npx expo install --fix
npx expo start --clear --web
```

## 3. **Teste no navegador primeiro**
```bash
npx expo start --web
```

## 4. **Se der erro, me mande a mensagem exata do erro**

O app deve funcionar mesmo sem Tailwind, pois mantive a estrutura básica.