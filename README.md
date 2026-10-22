# ロードストリング変換

APK Maker で生成したAndroid(WebView)プロジェクトです。

- パッケージ名: com.example.myapp
- バージョン: 1.0.0 (1)

## APKのビルド
1. このフォルダの中身をGitHubリポジトリ直下へpush
2. Actions の「Build APK」完了後、Artifacts から app-debug-apk を取得

ローカルでビルドする場合: Gradle 8.5 / JDK 17 / Android SDK を用意し `gradle assembleDebug`

Webコンテンツは app/src/main/assets/www/ にあります。
