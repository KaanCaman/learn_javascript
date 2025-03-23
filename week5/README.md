# 📌 Semantic Versioning & Version Pinning

## 📌 Semantik Sürümleme (Semantic Versioning)

Semantik Sürümleme (**Semantic Versioning - SemVer**) yazılım sürümlerini anlamlı ve takip edilebilir hale getirmek için kullanılan bir sürüm numaralandırma sistemidir.

### 🔹 Semantik Sürümleme Formatı

SemVer, **MAJOR.MINOR.PATCH** formatını takip eder:

- **MAJOR (Ana Sürüm)**: Geriye dönük uyumluluğu bozan değişiklikler.
- **MINOR (Alt Sürüm)**: Geriye dönük uyumlu yeni özellikler.
- **PATCH (Hata Düzeltmesi)**: Geriye dönük uyumlu hata düzeltmeleri.

#### 🎯 Örnekler

- **1.0.0** → İlk ana sürüm.
- **1.1.0** → Yeni bir özellik eklendi, geriye dönük uyumlu.
- **1.1.1** → Küçük bir hata düzeltildi.
- **2.0.0** → Mevcut API'yi kıran büyük değişiklikler.

## 📌 Version Pinning (Sürüm Sabitleme)

Version Pinning, bağımlılıkların belirli bir sürüme sabitlenmesi işlemdir. Bu, uygulamanın kararlılığını korumaya yardımcı olur ve beklenmeyen güncellemelerin neden olabileceği sorunları önler.

### 🔹 Sürüm Sabitleme Türleri

1. **Exact Version (Kesin Sürüm)**

   - Bağımlılık tam olarak belirtilen sürümde tutulur.
   - Örnek: `package-name@1.0.0`

2. **Tilde (~) Sembolü**

   - PATCH sürümlerine izin verir, MINOR ve MAJOR güncellemeleri engeller.
   - Örnek: `~1.2.3` → `1.2.x` güncellemelerine izin verir, ancak `1.3.0+` sürümlerine izin vermez.

3. **Caret (^) Sembolü**

   - MINOR ve PATCH güncellemelerine izin verir, ancak MAJOR güncellemeleri engeller.
   - Örnek: `^1.2.3` → `1.x.x` güncellemelerine izin verir, ancak `2.0.0+` sürümlerine izin vermez.

4. **Büyük ve Küçük İşaretleri (>=, <)**

   - **`>=`**: Belirtilen sürüm dahil olmak üzere daha yüksek sürümleri kabul eder.
   - **`<`**: Belirtilen sürümden daha küçük sürümleri kabul eder.
   - Örnek: `>=1.2.3` → `1.2.3` ve sonrasına izin verir, `<2.0.0` → `2.0.0`'dan küçük sürümleri kabul eder.

5. **Wildcard (\*) Kullanımı**
   - Herhangi bir sürümü kabul eder (tavsiye edilmez, stabiliteyi bozabilir).
   - Örnek: `*` veya `1.*`

## 🎯 Sonuç

Semantik sürümleme, yazılım geliştirme süreçlerinde düzeni sağlarken, sürüm sabitleme, projelerin kararlı ve güvenli bir şekilde çalışmasını sağlar. Geliştirme sürecinde uygun sürümleme ve sabitleme stratejilerini kullanmak, uzun vadede bakım ve güvenilirlik açısından kritik öneme sahiptir.

---

## 📌 Semantic Versioning

**Semantic Versioning (SemVer)** is a versioning system that makes software versions meaningful and easy to track.

### 🔹 Semantic Versioning Format

SemVer follows the **MAJOR.MINOR.PATCH** format:

- **MAJOR**: Introduces breaking changes.
- **MINOR**: Adds new features without breaking compatibility.
- **PATCH**: Fixes bugs while maintaining backward compatibility.

#### 🎯 Examples

- **1.0.0** → Initial stable release.
- **1.1.0** → Added a new feature, backward compatible.
- **1.1.1** → Fixed a minor bug.
- **2.0.0** → Introduced breaking changes.

## 📌 Version Pinning

Version Pinning is the process of locking dependencies to a specific version. This helps maintain stability and prevents unexpected updates from breaking the application.

### 🔹 Types of Version Pinning

1. **Exact Version**

   - Locks a dependency to a specific version.
   - Example: `package-name@1.0.0`

2. **Tilde (~) Symbol**

   - Allows PATCH updates but restricts MINOR and MAJOR updates.
   - Example: `~1.2.3` → Accepts `1.2.x` but not `1.3.0+`

3. **Caret (^) Symbol**

   - Allows MINOR and PATCH updates but restricts MAJOR updates.
   - Example: `^1.2.3` → Accepts `1.x.x` but not `2.0.0+`

4. **Greater/Less Than Signs (>=, <)**

   - **`>=`**: Accepts the specified version and any newer version.
   - **`<`**: Accepts versions lower than the specified version.
   - Example: `>=1.2.3` → Accepts `1.2.3` and above, `<2.0.0` → Accepts versions below `2.0.0`.

5. **Wildcard (\*) Usage**
   - Accepts any version (not recommended for stability).
   - Example: `*` or `1.*`

## 🎯 Conclusion

Semantic versioning ensures a structured release process, while version pinning secures project stability and compatibility. Choosing the right versioning and pinning strategy is crucial for long-term maintenance and reliability.
