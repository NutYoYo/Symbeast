# SYMBEAST — Evolve Forms Design Doc

Source of truth for pet Evolve I/II forms and Fusion Echo passives. Migrated from `design/SYMBEAST_Evolve_Forms.xlsx` (which still holds the other, less-frequently-edited sheets — Items/Artifacts/Weapons/Rewards/etc.).

## Evolved Forms (Stage 1)

*SYMBEAST — Evolved Forms (Stage 1, 10 forms)*

*ต้องการ Symbol 3 ตัว (F/W/S) ครบ 3 ดวง — formKey = ลำดับ F→W→S ที่รวบรวมได้*

| Key | Icon | Name | HP | ATK | SPD | DEF | Passive |
|---|---|---|---|---|---|---|---|
| FFF |  | BRAWLER | 65 | 24 | 10 | 4 | ATK เพิ่มขึ้น 25% ทุกรอบ |
| FFW | ⚡ | PANDA | 65 | 20 | 14 | 4 | 25% โอกาสโจมตีคริติคอล (ดาเมจ ×1.6) |
| FFS | 喝 | IRONJAW | 80 | 20 | 10 | 8 | ดูดเลือด 25% จากดาเมจที่โจมตีเป็น HP ทุกรอบ |
| FWW | ⚡ | BLITZ | 60 | 16 | 18 | 4 | 25% โอกาส Stun ศัตรู ทำให้โจมตีไม่ได้ 1 รอบ |
| FWS |  | CHAMPION | 75 | 16 | 14 | 8 | เมื่อชนะ: ATK +20% และรับดาเมจ -20% ในรอบนั้น |
| FSS |  | FORTRESS | 90 | 16 | 10 | 12 | สะท้อนดาเมจที่รับ 25% กลับไปยังศัตรูทุกรอบ |
| WWW |  | SPECTER | 60 | 12 | 22 | 4 | 25% โอกาสหลบการโจมตีของศัตรูได้สมบูรณ์ |
| WWS |  | SWIFTGUARD | 75 | 12 | 18 | 8 | 15% โอกาสหลบ และฟื้น HP สูงสุด 15% ทันที |
| WSS |  | SHIELDWING | 90 | 12 | 14 | 12 | เมื่อชนะ: ลดดาเมจที่รับ 50% เมื่อแพ้: ลดดาเมจที่รับ 15% |
| SSS | ⬛ | BASTION | 105 | 12 | 10 | 16 | 35% โอกาสลดดาเมจที่รับครึ่งหนึ่ง |
| GHOST | 🌟 | GHOST | 75 | 20 | 16 | 10 | เมื่อเริ่มต่อสู้ สุ่มได้รับ 1 บัฟ: ATK+25%, โอกาสหลบ +25% หรือ DEF+25% (ตลอดการต่อสู้) |
| EPIC-GHOST | ✨ | EPIC GHOST | 88 | 24 | 19 | 12 | เมื่อเริ่มต่อสู้ สุ่มได้รับ 2 บัฟพร้อมกัน (ไม่ซ้ำ) จาก ATK+25%, SPD+25%, โอกาสหลบ+25%, DEF+25% (ตลอดการต่อสู้) — 2% โอกาสตอน Evolve จาก Larva (แยกจาก GHOST 5%) |

## Evolve II Forms (Stage 2)

*SYMBEAST — Evolve II Forms (Stage 2, 30 forms — 3 branches × 10 base lines) — v2*

*ราคา: Symbol ตามสาย ×5 + Rebirth Stone ×1 + 5000G (กิ่ง BALANCE ใช้ Symbol F/W/S อย่างละ ×2 แทน) \| Stat = base × multiplier ต่อสาย + train bonus carry (excess×0.5) \| พาสซีฟเดิมของ Evolved form ยังทำงานอยู่ บวก Branch Skill ใหม่ (เฉพาะตัว) + Overdrive เฉพาะตัว \| สถานะใหม่: เผาไหม้ (Burn) เสีย HP 3%/เทิร์น นาน 3 เทิร์น และรับดาเมจ +25% ระหว่างติดไฟ*

| Base Key | Base Form | Base Passive (retained) | Branch | Evolve II Name | HP | ATK | SPD | DEF | Branch Skill (v2, bespoke) | Overdrive Name | Overdrive Effect |
|---|---|---|---|---|---|---|---|---|---|---|---|
| FFF | BRAWLER | ATK เพิ่มขึ้น 25% ทุกรอบ | FIST | RAGING-BRAWLER | 111 | 50 | 14 | 5 | เมื่อ WIN ดาเมจที่สร้างเพิ่มขึ้นครั้งละ 15% (สะสมได้สูงสุด 5 ครั้ง/1 การต่อสู้) | APOCALYPSE | โจมตี ×2.5 สองครั้ง (Crit บังคับ) จากนั้น Crit +25% นาน 3 เทิร์น |
|  |  |  | WING | WINDBLADE-BRAWLER | 104 | 38 | 21 | 5 | 25% โอกาสหลบการโจมตีได้สมบูรณ์ เมื่อหลบสำเร็จจะโจมตีโต้กลับด้วยดาเมจ 75% | APOCALYPSE WIND | โจมตี ×2.5 สองครั้ง (Crit บังคับ) + หลบเทิร์นนี้ จากนั้น Crit +20% และโอกาสหลบ +20% นาน 3 เทิร์น |
|  |  |  | BALANCE | CRIMSON-BRAWLER | 117 | 41 | 16 | 6 | ไม่ว่า WIN หรือ LOSE: ATK+10% และ SPD+10% ทุกรอบ (สะสมได้สูงสุด 3 ครั้ง/1 การต่อสู้) | APOCALYPSE RUSH | โจมตี ×2.5 ทะลุ DEF ทั้งหมดเทิร์นนี้ จากนั้น ATK+30%, SPD+30% และมีโอกาส 15% โจมตี 2 ครั้ง นาน 3 เทิร์น |
|  |  |  | SHIELD | KAIJU-BRAWLER | 137 | 36 | 13 | 8 | เมื่อ LOSE รอบถัดไปจะ ATK +50%, DEF +50% และมีโอกาส 25% ที่จะทำให้ศัตรูติดเผาไหม้ | APOCALYPSE WALL | โจมตี ×2.0 สองครั้ง + ลดดาเมจที่รับ 50% เทิร์นนี้ จากนั้น Crit +15% และลดดาเมจที่รับ 15% นาน 3 เทิร์น |
| FFW | PANDA | 25% โอกาสโจมตีคริติคอล (ดาเมจ ×1.6) | FIST | FIGHTER-PANDA | 111 | 42 | 19 | 5 | เมื่อ LOSE ดาเมจที่สร้างเพิ่มขึ้น 75% (ในเทิร์นที่ LOSE) | FORTRESS BREAK | โจมตี ×3.0 ทะลุ DEF จากนั้นทะลุ DEF และโอกาสโจมตีกลับ +75% นาน 3 เทิร์น |
|  |  |  | WING | PANDA-NINJA | 104 | 32 | 29 | 5 | 25% โอกาสหลบการโจมตีได้สมบูรณ์ เมื่อหลบสำเร็จ การโจมตีครั้งถัดไปจะติดคริติคอลแน่นอน (ดาเมจ ×1.6) | FORTRESS BREAK SHADOW | โจมตี ×2.5 ทะลุ DEF + หลบเทิร์นนี้ จากนั้น ATK×1.5, โอกาสหลบ +30% และโจมตีครั้งถัดไปติด Crit แน่นอน นาน 3 เทิร์น |
|  |  |  | BALANCE | PANDA-WARRIOR | 117 | 35 | 22 | 6 | มีโอกาส 25% รับดาเมจครึ่งนึงและโจมตีโต้กลับด้วยดาเมจ 75% | FORTRESS BREAK RUSH | โจมตี ×2.5 ทะลุ DEF + หลบเทิร์นนี้ จากนั้นทะลุ DEF และโอกาสโจมตีกลับ +50% และโอกาสหลบ +20% นาน 3 เทิร์น |
|  |  |  | SHIELD | ARMOR-PANDA | 137 | 30 | 18 | 8 | ลดดาเมจที่รับทั้งหมด 20% และมีโอกาส 50% ที่จะโจมตีกลับด้วยดาเมจ 75% | FORTRESS BREAK WALL | โจมตี ×2.0 ทะลุ DEF ทั้งหมด + สะท้อนดาเมจทั้งหมดเทิร์นนี้ จากนั้นสะท้อน 50% และลดดาเมจที่รับ 15% นาน 3 เทิร์น |
| FFS | IRONJAW | ดูดเลือด 25% จากดาเมจที่โจมตีเป็น HP ทุกรอบ | FIST | TYRANT-IRONJAW | 136 | 42 | 14 | 10 | ดาเมจที่สร้างเพิ่มขึ้น 20% และดูดเลือดเพิ่ม 10% | CRIMSON REAPER | โจมตี ×2.5 + ดูดเลือด 50% ของดาเมจที่สร้างในเทิร์นนี้ จากนั้น 3 เทิร์น: ATK+25%, ดูดเลือดเพิ่ม +20% |
|  |  |  | WING | AGILE-IRONJAW | 128 | 32 | 21 | 10 | 25% โอกาสโจมตี 2 ครั้ง และ 15% โอกาสหลบหลีก | CRIMSON REAPER FANG | โจมตี ×2.0 สองครั้งติด + ดูดเลือด 30% ของดาเมจรวมเทิร์นนี้ จากนั้น 3 เทิร์น: โอกาสโจมตี 2 ครั้ง +30%, ดูดเลือดเพิ่ม +15% |
|  |  |  | BALANCE | RUNE-IRONJAW | 144 | 35 | 16 | 12 | มีโอกาส 15% สตันศัตรู และทุกรอบได้รับ Rune บัฟสุ่ม: ATK+50% หรือ DEF+50% (ไม่สะสม รีเซ็ตทุกรอบ) | CRIMSON REAPER RUNE | โจมตี ×2.5 + ดูดเลือด 50% เทิร์นนี้ + สุ่ม Rune บัฟ (ATK+50% หรือ DEF+50%) จากนั้นดูดเลือด +20% และสุ่ม Rune บัฟ นาน 3 เทิร์น |
|  |  |  | SHIELD | FULLARMOR-IRONJAW | 168 | 30 | 13 | 17 | เมื่อ HP < 50% ลดดาเมจที่รับทั้งหมด 20% และโจมตีกลับด้วยดาเมจ 75% | CRIMSON REAPER WARD | โจมตี ×2.0 + ลดดาเมจที่รับ 50% เทิร์นนี้ + ดูดเลือด 30% จากนั้น 3 เทิร์น: ลดดาเมจที่รับ 20%, ดูดเลือดเพิ่ม +15%, โต้กลับ 50% ดาเมจเมื่อโดนตี |
| FWW | BLITZ | 25% โอกาส Stun ศัตรู ทำให้โจมตีไม่ได้ 1 รอบ | FIST | STRONG-BLITZ | 102 | 34 | 24 | 5 | เมื่อ WIN ดาเมจที่สร้างเพิ่มขึ้น 20% และเพิ่มโอกาส 15% Stun ศัตรู ทำให้โจมตีไม่ได้ 1 รอบ | THUNDER FANG | โจมตี ×2.5 + สตันศัตรู จากนั้น ATK×2 มีโอกาสสตัน 25% นาน 3 เทิร์น |
|  |  |  | WING | STORM-BLITZ | 96 | 26 | 38 | 5 | 20% โอกาสหลบการโจมตีได้สมบูรณ์ เมื่อหลบสำเร็จ ATK+50% และโจมตีไม่พลาดเป้า ในรอบถัดไป | THUNDER DASH | โจมตี ×2.0 + สตันศัตรู + หลบเทิร์นนี้ จากนั้น ATK×1.5 SPD×1.5 และโอกาสหลบ +25% นาน 3 เทิร์น |
|  |  |  | BALANCE | THUNDERCLOUD-BLITZ | 108 | 28 | 28 | 6 | 15% โอกาส Stun ศัตรู 1 รอบ ถ้าไม่ติดจะได้โอกาสหลบ 25% แทนในรอบนั้น | THUNDER STORM | โจมตี ×2.5 + สตันศัตรู จากนั้น ATK×2 และโอกาสสตัน 25% นาน 3 เทิร์น |
|  |  |  | SHIELD | BULWARK-BLITZ | 126 | 24 | 23 | 8 | ลดดาเมจที่รับทั้งหมด 20% และเมื่อถูกโจมตีมีโอกาส 15% ที่จะทำให้อีกฝ่าย Stun 1 รอบ | THUNDER GUARD | โจมตี ×2.0 + สตันศัตรู + รับดาเมจครึ่งเทิร์นนี้ จากนั้น ATK×1.5 DEF×1.5 และโอกาสสตัน 20% นาน 3 เทิร์น |
| FWS | CHAMPION | เมื่อชนะ: ATK +20% และรับดาเมจ -20% ในรอบนั้น | FIST | WARLORD-CHAMPION | 128 | 34 | 19 | 10 | ดาเมจที่สร้างเพิ่มขึ้น 20% และมีโอกาส 10% ที่จะโจมตี 4 ครั้ง | CONQUEROR'S WRATH | โจมตี 4 ครั้งรวดเร็ว จากนั้น ATK×1.2 มีโอกาสโจมตี 4 ครั้ง 25% นาน 3 เทิร์น  |
|  |  |  | WING | KING-CHAMPION | 120 | 26 | 29 | 10 | 20% โอกาสหลบการโจมตีได้สมบูรณ์ เมื่อหลบสำเร็จ ATK+10%, DEF+10%, SPD+10% (สะสมได้สูงสุด 5 ครั้ง/1 การต่อสู้) | BLOOD TRIBUTE | โจมตี ×2.0 ลดดาเมจศัตรู ×0.5 จากนั้น ATK×2, SPD/DEF×2, ดูดเลือด 35% นาน 3 เทิร์น |
|  |  |  | BALANCE | SOUL-CHAMPION | 135 | 28 | 22 | 12 | เมื่อ WIN: ATK+25% และมีโอกาส 25% ที่จะทำให้ศัตรูติดเผาไหม้ เมื่อ LOSE: โอกาสหลบ+25% และดาเมจที่สร้างเพิ่ม 25% ในรอบนั้น | SOUL BALANCE | โจมตี ×2.0 + ลดดาเมจศัตรูครึ่งหนึ่งเทิร์นนี้ จากนั้น ATK/DEF +25% และมีโอกาส 50% โจมตี 2 ครั้ง นาน 3 เทิร์น |
|  |  |  | SHIELD | ROLLING-CHAMPION | 158 | 24 | 18 | 17 | ลดดาเมจที่รับทั้งหมด 20% และทุกๆ 3 รอบจะโจมตีแรงขึ้น 50% และไม่พลาดเป้า (รีเซ็ต) | ROLLING STRIKE | โจมตี ×2.0 ลดดาเมจศัตรู ×0.5 จากนั้น ATK×2, SPD/DEF×2, มีโอกาสโจมตี 2 ครั้ง 50% นาน 3 เทิร์น  |
| FSS | FORTRESS | สะท้อนดาเมจที่รับ 25% กลับไปยังศัตรูทุกรอบ | FIST | BLAZING-FORTRESS | 153 | 34 | 14 | 16 | เมื่อ WIN ดาเมจที่สร้างเพิ่มขึ้นครั้งละ 15% และ DEF+15% (สะสมได้สูงสุด 3 ครั้ง/1 การต่อสู้) และมีโอกาส 20% ทำให้ศัตรูติดพิษ | EARTHSHATTER STRIKE | โจมตี ×3.0 + สะท้อนดาเมจทั้งหมดเทิร์นนี้ จากนั้น ATK+20% และสะท้อนดาเมจ 50% นาน 3 เทิร์น |
|  |  |  | WING | SWIFT-FORTRESS | 144 | 26 | 21 | 16 | ทุก 3 เทิร์น จะสะท้อนดาเมจที่รับ 75% กลับไปยังศัตรู ฟื้นฟู HP 10% และมีโอกาส 50% ทำให้ศัตรูติดพิษ | EARTHSHATTER QUAKE | โจมตี ×2.0 + หลบเทิร์นนี้ จากนั้นสะท้อนดาเมจ 50% และโอกาสหลบ +15% และฟื้นฟู HP 10% นาน 3 เทิร์น |
|  |  |  | BALANCE | POISON-FORTRESS | 162 | 28 | 16 | 19 | ลดดาเมจที่รับทั้งหมด 10% และมีโอกาส 25% ทำให้ศัตรูติดพิษเมื่อถูกโจมตี (6% MaxHP/เทิร์น นาน 3 เทิร์น) และตัวเองจะไม่มีทางติดพิษ | VENOM EARTHSHATTER | โจมตี ×2.5 + สะท้อนดาเมจทั้งหมดเทิร์นนี้ + วางพิษ ☠️ ใส่ศัตรู 3 เทิร์น จากนั้นสะท้อน 50%, ATK+20% และโอกาส 25% วางพิษเมื่อถูกโจมตี นาน 3 เทิร์น |
|  |  |  | SHIELD | GUARDIAN-FORTRESS | 189 | 24 | 13 | 25 | ลดดาเมจที่รับทั้งหมด 25% และเมื่อ HP < 50% จะสะท้อนดาเมจที่ได้รับเพิ่ม 25% กลับไปยังศัตรู | EARTHSHATTER | โจมตี ×2.5 + สะท้อนดาเมจทั้งหมดเทิร์นนี้ จากนั้นสะท้อนดาเมจ 100% นาน 3 เทิร์น และเมื่อถูกโจมตีมีโอกาส 50% ทำให้ศัตรูติดพิษนาน 3 เทิร์น |
| WWW | SPECTER | 25% โอกาสหลบการโจมตีของศัตรูได้สมบูรณ์ | FIST | DARK-SPECTER | 102 | 25 | 30 | 5 | ดาเมจที่สร้างเพิ่มขึ้น 20% และ Crit Rate +25%, ดูดเลือด 15% | DEATH SCYTHE | โจมตี ×5.0 ทรงพลัง จากนั้น Crit +50% นาน 3 เทิร์น |
|  |  |  | WING | SOUL-SPECTER | 96 | 19 | 46 | 5 | 20% โอกาสหลบการโจมตีได้สมบูรณ์ เมื่อหลบสำเร็จ การโจมตีถัดไปจะโจมตี 2 ครั้ง | SOUL SCYTHE  | โจมตี ×4.0 + หลบเทิร์นนี้ + วางพิษ ☠️ ใส่ศัตรู 3 เทิร์น จากนั้นโอกาสหลบ +40% นาน 3 เทิร์น |
|  |  |  | BALANCE | MAGE-SPECTER | 108 | 21 | 35 | 6 | เมื่อ WIN จะสาปศัตรู ลด ATK ของศัตรู 25% เป็นเวลา 2 รอบ, เมื่อ DRAW จะสาปให้ศัตรูฟื้นฟู HP ไม่ได้ 3 รอบ, เมื่อ LOSE ลดดาเมจที่ได้รับ 10% | MAGE SCYTHE | โจมตี ×4.0 + หลบเทิร์นนี้ + สาปศัตรู (ATK-25%, 2 เทิร์น) จากนั้น Crit +30% และโอกาส 30% สาปเมื่อโจมตี นาน 3 เทิร์น |
|  |  |  | SHIELD | GRAVE-SPECTER | 126 | 18 | 29 | 8 | ลดดาเมจที่รับทั้งหมด 25% และมีโอกาส 50% ฟื้นฟู HP 5% | GRAVEYARD WARD | โจมตี ×4.0 + ลดดาเมจที่รับครึ่งเทิร์นนี้ + วางพิษ ☠️ ใส่ศัตรู 3 เทิร์น จากนั้นลดดาเมจที่รับ 50% และฟื้นฟู HP 10% นาน 3 เทิร์น |
| WWS | SWIFTGUARD | 15% โอกาสหลบ และฟื้น HP สูงสุด 15% ทันที | FIST | FIGHT-SWIFTGUARD | 128 | 25 | 24 | 10 | เมื่อ WIN ดาเมจที่สร้างเพิ่มขึ้นครั้งละ 15%, โอกาสหลบ +5%, Crit Rate +5% (สะสมได้สูงสุด 3 ครั้ง/1 การต่อสู้) | POWER STRIKE | โจมตี ×3.5 + ฟื้นฟู HP 40% เทิร์นนี้ จากนั้น ATK+50% และการโจมตีจะไม่พลาดเป้า นาน 3 เทิร์น |
|  |  |  | WING | QUICK-SWIFTGUARD | 120 | 19 | 38 | 10 | 25% โอกาสหลบการโจมตีได้สมบูรณ์ เมื่อหลบสำเร็จการโจมตีครั้งถัดไปจะทะลุ DEF ฝั่งตรงข้ามและไม่พลาดเป้า | SWIFT STRIKE | โจมตี ×3.0 จากนั้น ATK×2 และเพิ่มโอกาสหลบ 15% (คงที่) ต่อเทิร์น นาน 3 เทิร์น |
|  |  |  | BALANCE | PHEONIX-SWIFTGUARD | 135 | 21 | 28 | 12 | ทุกการโจมตีมีโอกาส 15% ทำให้ศัตรูติดเผาไหม้ เมื่อ HP<30% (ครั้งเดียว/การต่อสู้): ฟื้น HP 100% ทันที + ATK/DEF/SPD +15% | PHOENIX STRIKE | โจมตี ×3.0 + ฟื้นฟู HP 30% เทิร์นนี้ จากนั้นเป็นเวลา 3 เทิร์น: ATK +50%, ฟื้นฟู HP 15% ต่อเทิร์น และมีโอกาส 50% ทำให้ศัตรูติดเผาไหม้เมื่อโดนโจมตี |
|  |  |  | SHIELD | IRON-SWIFTGUARD | 158 | 18 | 23 | 17 | เมื่อ LOSE ลดดาเมจที่รับทั้งหมด 15% (สะสมได้สูงสุด 3 ครั้ง/1 การต่อสู้) | IRON CURTAIN WALL | ชาร์จโล่เต็ม + สะท้อนดาเมจเทิร์นนี้ จากนั้นลดดาเมจที่รับ 25% ATK+50% และฟื้นฟู HP 15% ต่อเทิร์น นาน 3 เทิร์น |
| WSS | SHIELDWING | เมื่อชนะ: ลดดาเมจที่รับ 50% เมื่อแพ้: ลดดาเมจที่รับ 15% | FIST | HAMMER-SHIELDWING | 153 | 25 | 19 | 16 | เมื่อ WIN ดาเมจที่สร้างเพิ่มขึ้น 20% และเพิ่มโอกาส 15% Stun ศัตรู ทำให้โจมตีไม่ได้ 1 รอบ และโจมตีทะลุ DEF | HAMMER FALL | โจมตี ×3.0 ทะลุ DEF + สตันศัตรูเทิร์นนี้ จากนั้น 3 เทิร์น: ATK+25%, โจมตีทะลุ DEF ต่อเนื่อง, โอกาสสตัน +15% |
|  |  |  | WING | CHILL-SHIELDWING | 144 | 19 | 29 | 16 | ทุก 3 เทิร์น จะหลบการโจมตีได้ 100% และโจมตีทะลุ DEF ด้วย ATK+50% และมีโอกาส 50% แช่แข็งศัตรู | CHILL SLASH | โจมตี ×3.0 ทะลุ DEF + หลบการโจมตีเทิร์นนี้ จากนั้น 3 เทิร์น: โอกาสหลบ +30%, โจมตีทะลุ DEF, 50% แช่แข็งศัตรู |
|  |  |  | BALANCE | GAIA-SHIELDWING | 162 | 21 | 22 | 19 | มีโอกาส 10% แช่แข็งศัตรู และทุก 3 รอบ: ฟื้น HP 15% ของ Max HP และ ATK/DEF+20% ในรอบนั้น | GAIA WRATH | โจมตี ×3.0 ทะลุ DEF + ฟื้นฟู HP 20% เทิร์นนี้ จากนั้น ATK/DEF +30%, ฟื้นฟู HP 10% ต่อเทิร์น, 10% แช่แข็งศัตรู นาน 3 เทิร์น |
|  |  |  | SHIELD | FATTY-SHIELDWING | 189 | 18 | 18 | 25 | ลดดาเมจที่รับทั้งหมด 20% และเมื่อ HP > 70% ATK+30%, DEF+30% แต่ถ้า HP <70% ATK+50% | SKYFALL BULWARK | โจมตี ×3.0 + ทะลุ DEF + สตันศัตรูเทิร์นนี้ จากนั้น 3 เทิร์น: ลดดาเมจที่รับ 20%, ATK+50%, DEF+50% |
| SSS | BASTION | 35% โอกาสลดดาเมจที่รับครึ่งหนึ่ง | FIST | GUANLET-BASTION | 179 | 25 | 14 | 21 | เมื่อ LOSE ดาเมจที่สร้างเพิ่มขึ้นครั้งละ 15% (สะสมได้สูงสุด 5 ครั้ง/1 การต่อสู้) | GAUNTLETSTRIKE | รับดาเมจเพียง 1 + โจมตีสวนด้วย ATK×3 เทิร์นนี้ จากนั้น ATK+50% และฟื้นฟู HP 10% ต่อเทิร์น นาน 3 เทิร์น |
|  |  |  | WING | IRON-BASTION | 168 | 19 | 21 | 21 | 20% โอกาสหลบการโจมตีได้สมบูรณ์, ทุก 3 เทิร์น โจมตีไม่พลาดเป้า ดาเมจ +50% และติดคริติคอลแน่นอน | BASTION BEAM | โจมตี ×3.5 + หลบเทิร์นนี้ จากนั้นโอกาสหลบ +30% และฟื้นฟู HP 10% ต่อเทิร์น และการโจมตีจะไม่พลาดเป้า นาน 3 เทิร์น |
|  |  |  | BALANCE | CRYSTAWOLF-BASTION | 189 | 21 | 16 | 25 | เมื่อ HP > 50%: ATK+25% เมื่อ HP < 50%: DEF+25% โต้กลับด้วยดาเมจ 75% ทุกรอบ และมีโอกาส 10% ทำให้ศัตรูติดแช่แข็งเมื่อโดนโจมตี | CRYSTAL BEAM | โจมตี ×3.5 + หลบเทิร์นนี้ จากนั้น ATK+50%, ลดดาเมจที่รับ 30% และฟื้นฟู HP 10% ต่อเทิร์น นาน 3 เทิร์น |
|  |  |  | SHIELD | GOLEM-BASTION | 221 | 18 | 13 | 34 | ลดดาเมจที่รับทั้งหมด 20% และเมื่อ HP < 30% ATK+30%, ฟื้นฟู HP 5% | DIVINE AEGIS | รับดาเมจเพียง 1 ในเทิร์นนี้ จากนั้นรับดาเมจเพียง 1, ATK×2 และฮีล 10% MaxHP นาน 3 เทิร์น |
| GHOST | GHOST | เมื่อเริ่มต่อสู้ สุ่มได้รับ 1 บัฟ: ATK+25%, โอกาสหลบ +25% หรือ DEF+25% (ตลอดการต่อสู้) | FIST | RAGEBEAR-GHOST | 112 | 48 | 15 | 6 | โจมตี x1.75 เมื่อศัตรูมี HP > 50% | BEAR RAGE | โจมตี x4.0 + สตันเทิร์นนี้ จากนั้น ATK+30% และ Crit+25% นาน 3 เทิร์น |
|  |  |  | FIST | LION-GHOST | 108 | 52 | 16 | 5 | โจมตี 5 เทิร์นแรกใส่ศัตรูแต่ละตัวติดคริติคอลแน่นอน และลด ATK ศัตรู 10% ตลอดการต่อสู้ | KING'S ROAR | โจมตี x3.5 จากนั้น ATK+40% และศัตรู DEF-20% นาน 3 เทิร์น |
|  |  |  | FIST | TIGER-GHOST | 114 | 50 | 18 | 5 | เมื่อ WIN ดาเมจ+50% เมื่อ LOSE SPD+100% ในรอบถัดไป | TIGER CLAW | โจมตี x4.0 ทะลุ DEF + คริติคอลแน่นอนเป็นเวลา 3 เทิร์น |
|  |  |  | FIST | WOLF-GHOST | 106 | 46 | 20 | 6 | โอกาสโจมตี 2 ครั้ง 25% เพิ่มเป็น 35% เมื่อ HP<50% | WOLF FANG | โจมตี 2 ครั้ง x2.5 จากนั้นโอกาสโจมตี 2 ครั้ง +50% นาน 3 เทิร์น |
|  |  |  | FIST | SHARK-GHOST | 118 | 49 | 14 | 7 | ดาเมจ+30% ดูดเลือด 30% ใส่ศัตรูที่ HP<50% | SHARK BITE | โจมตี x4.0 หากศัตรู HP<50% หรือ x2.5 หาก HP>50% จากนั้นดูดเลือด 25% นาน 3 เทิร์น |
|  |  |  | FIST | MANTIS-GHOST | 102 | 54 | 17 | 4 | ความแรงของดาเมจคริติคอล x2.0 แทน x1.6 และเมื่อ HP<20% ดาเมจที่ทำได้ +50% | MANTIS SLASH | โจมตี x3.5 (คริบังคับ) + DEF ศัตรู -50% นาน 3 เทิร์น |
|  |  |  | WING | BEE-GHOST | 100 | 28 | 44 | 5 | โอกาส 15% โจมตี 3 ครั้ง เมื่อสำเร็จมีโอกาสทำให้ศัตรูติดพิษ 50% | BEE SWARM | โจมตี 4 ครั้ง x1.5 จากนั้นหลบ+25% นาน 3 เทิร์น |
|  |  |  | WING | BUNNY-GHOST | 96 | 24 | 48 | 4 | หลบ 20% เมื่อหลบสำเร็จ ATK/SPD+50% รอบถัดไป | BUNNY HOP | โจมตี x3.0 + หลบสมบูรณ์เทิร์นนี้ จากนั้นหลบ+35% และมีโอกาส 50% ทำให้ศัตรูติดสถานะตาบอด (โจมตีพลาด 50%) นาน 3 เทิร์น |
|  |  |  | WING | TRICKFOX-GHOST | 104 | 30 | 42 | 5 | ในการต่อสู้ SPD+25% และโอกาส 50% ทำให้ศัตรูติดสถานะเผาไหม้ เป็นเวลา 3 เทิร์น | FOX TRICK | โจมตี x3.0 + ทำให้ศัตรูติดสถานะฟื้นฟู HP ไม่ได้ 3 เทิร์น จากนั้นหลบ+25% นาน 3 เทิร์น |
|  |  |  | WING | OWL-GHOST | 108 | 26 | 40 | 6 | โจมตีไม่พลาดเป้า และมีโอกาส 15% ทำให้ศัตรูติดสถานะตาบอด (โจมตีพลาด 50% เป็นเวลา 3 เทิร์น) | OWL SIGHT | โจมตี x3.0 (ติดคริติคอล) + จากนั้น ATK/SPD+25% นาน 3 เทิร์น |
|  |  |  | WING | VOLTMOUSE-GHOST | 98 | 32 | 46 | 4 | ทุกเทิร์นมีโอกาสสุ่ม ทำให้ศัตรูสตัน, ลด ATK 50%, ลด DEF 50%, เพิ่ม ATK 25%(ให้ศัตรู) | THUNDER SHOCK | โจมตี x3.0 + สตันเทิร์นนี้ จากนั้น SPDx2.0 และโอกาสสตัน+30% นาน 3 เทิร์น |
|  |  |  | WING | PENGUIN-GHOST | 112 | 22 | 38 | 8 | ลดดาเมจ 15%, โอกาสแช่แข็งศัตรู 15% เมื่อ HP<50% หลบ+25% ATK+25% | ICE SLIDE | โจมตี x3.5 + หลบสมบูรณ์เทิร์นนี้ + DEF+50% นาน 3 เทิร์น |
|  |  |  | SHIELD | COCKROACH-GHOST | 135 | 22 | 16 | 24 | เมื่อถูกโจมตีถึงตายจะเหลือ HP 1 (1 ครั้ง/การต่อสู้) และ ATK/DEF/SPD+100% ตลอดการต่อสู้นั้น | ROACH SURVIVAL | รับดาเมจ 1 เทิร์นนี้ + ฟื้น HP 30% จากนั้นลดดาเมจ 25% และมีโอกาส 50% ทำให้ศัตรูติดสถานะตาบอด (โจมตีพลาด 50%) นาน 3 เทิร์น |
|  |  |  | SHIELD | SLIME-GHOST | 145 | 18 | 13 | 22 | ฟื้น HP 5% ทุกรอบ และเมื่อถูกโจมตีหรือโจมตีศัตรูมีโอกาส 25% ทำให้ศัตรูติดพิษ | SLIME ABSORB | ดูด HP ศัตรู 25% + ฟื้น HP 30% จากนั้นฟื้น 10% ต่อเทิร์น นาน 3 เทิร์น |
|  |  |  | SHIELD | LEAPFROG-GHOST | 125 | 24 | 18 | 22 | โอกาส 25% สะท้อนดาเมจ 50% และทำให้ศัตรูติดพิษ | FROG LEAP | โจมตี x2.5 + สะท้อนดาเมจ 100% เทิร์นนี้ จากนั้นสะท้อน 50% + ATK+25% นาน 3 เทิร์น |
|  |  |  | SHIELD | HAMSTER-GHOST | 128 | 20 | 15 | 24 | ทุก 3 เทิร์นฟื้น HP 20% และ DEF+50% ในรอบนั้น | HAMSTER STASH | รับดาเมจ 1 เทิร์นนี้ + ฟื้น HP 40% จากนั้น DEF+30% + ฟื้น 8% ต่อเทิร์น 3 เทิร์น |
|  |  |  | SHIELD | AXOLOTL-GHOST | 140 | 21 | 15 | 26 | โอกาสหลบ 10% เมื่อถูกโจมตีโอกาส 30% ฟื้น HP 15% | AXOLOTL REGEN | โจมตี x2.0 + ฟื้น HP 50% และล้างสถานะผิดปกติทั้งหมด จากนั้นฟื้น 12% ต่อเทิร์น นาน 3 เทิร์น |
|  |  |  | SHIELD | CAT-GHOST | 118 | 26 | 22 | 18 | หลบ 25% ถ้าโดนโจมตี รอบถัดไปจะ ATK/SPD+50% | CAT NINE LIVES | โจมตี x3.0 + หลบสมบูรณ์เทิร์นนี้ จากนั้นหลบ+30% + ATK+50% นาน 3 เทิร์น |
|  |  |  | BALANCE | DRAGON-GHOST | 118 | 34 | 22 | 14 | ATK/DEF/SPD +3% ทุกรอบ (สูงสุด 10 ครั้ง) และมีโอกาส 15% ทำให้ศัตรูติดสถานะเผาไหม้ เป็นเวลา 3 เทิร์น | DRAGON BREATH | โจมตี x3.5 + ทำให้ศัตรูติดสถานะเผาไหม้ จากนั้น ATK/DEF/SPD+20% นาน 3 เทิร์น |
|  |  |  | BALANCE | GRIFFON-GHOST | 112 | 36 | 24 | 12 | หลบ 15%, Crit Rate+15%,SPD +15% และเมื่อโจมตีติดคริติคอล จะทำให้ศัตรูติดสถานะฟื้นฟู HP ไม่ได้ 3 เทิร์น | GRIFFON DIVE | โจมตี x3.5 ทะลุ DEF + หลบเทิร์นนี้ จากนั้น ATK/SPD+30% นาน 3 เทิร์น |
|  |  |  | BALANCE | OCTOPUS-GHOST | 125 | 30 | 20 | 16 | โอกาส 30% ทำให้ศัตรูติดสถานะตาบอด (โจมตีพลาด 50% เป็นเวลา 3 เทิร์น) | OCTOPUS INK | โจมตี x2.5 + ศัตรูตาบอด (โจมตีพลาด 50%) 3 เทิร์น จากนั้น ATK+25% นาน 3 เทิร์น |
|  |  |  | BALANCE | PHOENIX-GHOST | 108 | 35 | 26 | 10 | เมื่อตายจะฟื้นคืนชีพด้วย HP 100% และทำให้ศัตรูติดสถานะเผาไหม้ 10 เทิร์น (1 ครั้ง/การต่อสู้) | PHOENIX REBIRTH | โจมตี x3.5 + ฟื้น HP 25% จากนั้น ATK/SPD+30% นาน 3 เทิร์น |
|  |  |  | BALANCE | UNICORN-GHOST | 115 | 32 | 25 | 12 | ฟื้น HP 8% ต่อเทิร์น ล้างดีบัฟ 1 อย่างต่อเทิร์น (Curse/No-Heal/Burn/Poison/Stun/Blind/Heal-Block — ครอบคลุมทุกประเภท) | UNICORN BLESS | โจมตี x3.0 + ฟื้น 40% + ล้างสถานะทั้งหมด จากนั้น ATK/SPD/DEF+20% + ฟื้น 10% ต่อเทิร์น 3 เทิร์น |
|  |  |  | BALANCE | PANDA-GHOST | 120 | 33 | 18 | 15 | Crit Rate+25% โอกาสสตัน 20% เมื่อโจมตี | PANDA STRIKE | โจมตี x4 (คริบังคับ) + สตัน จากนั้น Crit+30% + โอกาสสตัน+20% นาน 3 เทิร์น |
| EPIC GHOST | EPIC GHOST | ตอน Evolve จาก Larva (สุ่มครั้งเดียว 3 ทาง): ปกติตาม Symbol 93% / GHOST 5% / EPIC GHOST 2%<br><br>สกิลพื้นฐาน: เมื่อเริ่มต่อสู้ สุ่มได้รับ 2 บัฟพร้อมกัน (ไม่ซ้ำ) จาก ATK+25%, SPD+25%, โอกาสหลบ+25%, DEF+25% (ตลอดการต่อสู้)<br><br>จากนั้นวิวัฒนาการขั้น 2 (Evolve II) แตกสายตาม 4 กลุ่มด้านล่าง (สุ่ม 1 ใน 4 ต่อสาย เหมือนกลไก GHOST_EVOLVE2_POOLS) | FIST | RED-SENTINEL-GHOST | 135 | 55 | 18 | 8 | เมื่อ WIN: ATK+15% ต่อครั้ง (สะสมสูงสุด 5 ครั้ง/การต่อสู้) ทุกๆ 3 เทิร์น โจมตีติดคริติคอลแน่นอน (ดาเมจ ×2.0) | CRIMSON JUDGMENT | โจมตี ×3.5 ทะลุ DEF + คริติคอลแน่นอน จากนั้น ATK+30% นาน 3 เทิร์น |
|  |  |  | FIST | IFRIT-GHOST | 120 | 62 | 19 | 6 | ทุกการโจมตีมีโอกาส 30% ทำให้ศัตรูติดเผาไหม้ (3% HP/เทิร์น นาน 3 เทิร์น) และเมื่อ WIN: ATK+10% ต่อครั้ง (สะสมสูงสุด 5 ครั้ง/การต่อสู้) | HELLFIRE NOVA | โจมตี ×2.5 + เผาไหม้แน่นอน (3 เทิร์น) จากนั้นดาเมจ +100% ใส่ศัตรูที่ติดเผาไหม้ นาน 3 เทิร์น |
|  |  |  | FIST | BABARIAN-GHOST | 140 | 58 | 15 | 9 | ดาเมจที่สร้างเพิ่มขึ้น 20% ต่อทุก 10% HP ที่หายไป (สูงสุด +160%) | BLOOD FRENZY | โจมตี ×2.0 สองครั้ง จากนั้นดาเมจ +25% ระหว่าง HP ต่ำกว่า 50% นาน 3 เทิร์น |
|  |  |  | FIST | SAMURAI-GHOST | 125 | 60 | 21 | 7 | โจมตีติดคริติคอลแน่นอน และเพิ่มโอกาสหลบหลีก 20% | MOONLIGHT SLASH | โจมตี ×4.0 คริติคอลแน่นอน จากนั้น หลบหลีก +25% นาน 3 เทิร์น |
|  |  |  | WING | BLUE-SENTINEL-GHOST | 112 | 30 | 52 | 7 | 25% โอกาสหลบการโจมตี เมื่อหลบสำเร็จ การโจมตีครั้งถัดไป ATK +50% และทะลุ DEF | AZURE STORM | โจมตี ×2.5 ทะลุ DEF ไม่พลาดเป้า จากนั้นโอกาสหลบ +20% นาน 3 เทิร์น |
|  |  |  | WING | RANGER-GHOST | 108 | 34 | 48 | 6 | โจมตีไม่พลาดเป้าเลย และมีโอกาส 20% โจมตี 2 ครั้ง | RAIN OF ARROWS | โจมตี ×2.0 จำนวน 3 ครั้งติด (การันตี) จากนั้น SPD +50% นาน 3 เทิร์น |
|  |  |  | WING | VALKYLIE-GHOST | 118 | 32 | 50 | 8 | เมื่อ WIN: ฟื้น HP 10% ของ Max HP และโอกาสหลบ +15% และ ATK+20% ในรอบถัดไป | WINGS OF JUDGMENT | โจมตี ×2.5 + ฟื้น HP เต็ม จากนั้น ATK/SPD +25% นาน 3 เทิร์น |
|  |  |  | WING | ARC-ANGEL-GHOST | 115 | 29 | 54 | 8 | ทุกเทิร์นมีโอกาส 50% ล้างดีบัฟ 1 อย่าง และเมื่อ HP<50% โอกาสสตันศัตรู 50% โอกาสหลบ +15% | HEAVEN'S LIGHT | โจมตี ×3.0 + ทำให้ศัตรูตาบอด จากนั้นฟื้นฟู HP 20% นาน 3 เทิร์น |
|  |  |  | SHIELD | GREEN-SENTINEL-GHOST | 158 | 24 | 19 | 28 | 30% โอกาสลดดาเมจที่รับครึ่งหนึ่ง และฟื้น HP 4% ของ Max HP ทุกเทิร์น | NATURE'S BASTION | โจมตี ×4.0 ทะลุ DEF จากนั้น DEF+50% นาน 3 เทิร์น |
|  |  |  | SHIELD | SKELETON-KING-GHOST | 165 | 27 | 16 | 25 | ดูดเลือด 20% ทุกการโจมตี และเมื่อตายจะฟื้นคืนชีพด้วย HP 100% (1 ครั้ง/การต่อสู้) | REGAL DECREE | โจมตี ×3.0 + สาปศัตรู (ATK-25% นาน 2 เทิร์น) จากนั้นดูดเลือด 50% นาน 3 เทิร์น |
|  |  |  | SHIELD | DRAGON-KNIGHT-GHOST | 155 | 26 | 18 | 27 | สะท้อนดาเมจที่รับ 30% กลับไปยังศัตรู และเมื่อ HP < 50%: DEF+25% และฟื้นฟู HP 3% ต่อเทิร์น | DRACONIC BULWARK | โจมตี ×2.5 ทะลุ DEF จากนั้นสะท้อนดาเมจ 100% นาน 3 เทิร์น |
|  |  |  | SHIELD | ARC-DEMON-GHOST | 148 | 29 | 20 | 24 | ทุกการโจมตี : 50% โอกาสสุ่มดีบัพ 1 อย่างที่มีในเกมใส่ศัตรู (พิษ, เผาไหม้, คำสาป, ตาบอด, ห้ามฮีล) | INFERNAL DECREE | โจมตี ×2.0 + เสกดีบัพทุกอย่างที่มีในเกมใส่ศัตรู (พิษ, เผาไหม้, คำสาป, ตาบอด, ห้ามฮีล,แช่แข็ง) จากนั้น ATK+25% นาน 3 เทิร์น |
|  |  |  | BALANCE | BAHAMUT-GHOST | 145 | 38 | 24 | 17 | เมื่อ WIN: ATK+75% DEF-50% เมื่อ LOSE: DEF+75% ATK-50% | DRAGON'S ROAR | โจมตี ×3.0 สองครั้ง (คริบังคับทั้งคู่) จากนั้น ATK/SPD +20% นาน 3 เทิร์น |
|  |  |  | BALANCE | DRAGON-TAMER-GHOST | 130 | 35 | 26 | 16 | เมื่อ WIN: โจมตีทะลุ DEF และมีโอกาส 50% ทำให้ศัตรูติดเผาไหม้ เมื่อ LOSE: DEF+25% | TAMER'S CALL | โจมตี ×3.0 + โจมตีทะลุ DEF จากนั้นได้รับดาเมจลดลง 25% นาน 3 เทิร์น |
|  |  |  | BALANCE | ALIEN-GHOST | 128 | 34 | 28 | 14 | เมื่อโดน พิษ/เผาไหม้/คำสาป/แช่แข็ง ดีบัฟจะยังคงอยู่ตามเวลาปกติ แต่ผลที่ได้รับกลายเป็นตรงกันข้าม (เป็นผลดีแทน) และมีโอกาส 15% ทำให้ศัตรูตาบอดเมื่อโจมตี | COSMIC ANOMALY | โจมตี ×3.0 ทะลุ DEF และไม่พลาดเป้า จากนั้น 3 เทิร์น: มีโอกาส 50% ทำให้ศัตรูตาบอด |
|  |  |  | BALANCE | SHIVA-GHOST | 138 | 37 | 23 | 18 | ทุก 3 เทิร์น: ดาเมจที่สร้าง ×2.0 และมีโอกาส 50% แช่แข็งศัตรู และภูมิคุ้มกันดีบัฟในเทิร์นนั้น | COSMIC DESTRUCTION | โจมตี ×4.0 + แช่แข็งศัตรู จากนั้น SPD+100% เป็นเวลานาน 3 เทิร์น |

## Fusion Passives v2 (Echo)

*SYMBEAST — Fusion Passives v2 (proposal, ยังไม่ implement) — Approach B: 1 new half-strength Echo passive per Evolve II form (40 total, not per-pair)*

*Fusion = choose/random 1 of the 2 parents' own Evolve II form -> egg inherits that form's Echo passive (numbers ~halved, freshly coded, no shared battle-state vars, so it never conflicts with any natural passive)*

*Evolve II Form \| Icon \| Echo Passive Name \| Effect (EN) \| Effect (TH)*

| Evolve II Form | Icon | Echo Passive Name | Effect (EN) | Effect (TH) |
|---|---|---|---|---|
| RAGING-BRAWLER | 💢 | RAGING ECHO | On WIN: damage dealt +8% per stack (max 5 stacks per battle) | เมื่อ WIN ดาเมจเพิ่มขึ้นครั้งละ 8% (สะสมสูงสุด 5 ครั้ง) |
| WINDBLADE-BRAWLER | 🗡 | WINDBLADE ECHO | 12% chance to dodge; on dodge, counter-attacks for 75% damage | 12% โอกาสหลบการโจมตี เมื่อหลบสำเร็จโต้กลับดาเมจ 75% |
| CRIMSON-BRAWLER | ☯️ | CRIMSON ECHO | Every round: ATK+5% and SPD+5% (max 3 stacks per battle) | ทุกรอบ ATK+5% และ SPD+5% (สะสมสูงสุด 3 ครั้ง) |
| KAIJU-BRAWLER | 🦖 | KAIJU ECHO | On LOSE: next round ATK+25%, DEF+25%, and 12% chance to burn the enemy | เมื่อ LOSE รอบถัดไป ATK+25%, DEF+25% และ 12% โอกาสทำให้ศัตรูติดเผาไหม้ |
| FIGHTER-PANDA | 🥊 | FIGHTER ECHO | On LOSE: damage dealt +35% that turn | เมื่อ LOSE ดาเมจเพิ่มขึ้น 35% ในเทิร์นนั้น |
| PANDA-NINJA | 🥷 | NINJA ECHO | 12% chance to dodge; on dodge, crit chance +50% next attack | 12% โอกาสหลบการโจมตี เมื่อหลบสำเร็จ โอกาสคริ+50% ในการโจมตีถัดไป |
| PANDA-WARRIOR | 🐼 | WARRIOR ECHO | 12% chance to take half damage and counter-attack for 75% damage | 12% โอกาสรับดาเมจครึ่งหนึ่งและโต้กลับด้วยดาเมจ 75% |
| ARMOR-PANDA | 🛡 | ARMOR ECHO | Damage taken -10%; 25% chance to counter-attack for 75% damage | ลดดาเมจที่รับ 10% และ 25% โอกาสโต้กลับด้วยดาเมจ 75% |
| TYRANT-IRONJAW | 🩸 | TYRANT ECHO | Damage dealt +10% and lifesteal +5% | ดาเมจที่สร้างเพิ่มขึ้น 10% และดูดเลือดเพิ่ม 5% |
| AGILE-IRONJAW | ⚔ | AGILE ECHO | 15% chance to attack twice, 8% chance to dodge | 15% โอกาสโจมตี 2 ครั้ง และ 8% โอกาสหลบหลีก |
| RUNE-IRONJAW | 🔮 | RUNE ECHO | 8% chance to stun the enemy; each round gains a random Rune: ATK+25% or DEF+25% | 8% โอกาสสตันศัตรู และทุกรอบได้รับ Rune สุ่ม: ATK+25% หรือ DEF+25% |
| FULLARMOR-IRONJAW | 🛡 | FULLARMOR ECHO | While HP < 50%: damage taken -10% and counter-attacks for 75% damage | เมื่อ HP < 50% ลดดาเมจที่รับ 10% และโต้กลับด้วยดาเมจ 75% |
| STRONG-BLITZ | ⚡ | STRONG ECHO | On WIN: damage dealt +10% and 8% chance to stun the enemy for 1 round | เมื่อ WIN ดาเมจเพิ่มขึ้น 10% และ 8% โอกาส Stun ศัตรู 1 รอบ |
| STORM-BLITZ | 🌩 | STORM ECHO | 10% chance to dodge; on dodge, ATK+25% and attacks never miss next round | 10% โอกาสหลบการโจมตี เมื่อหลบสำเร็จ ATK+25% และโจมตีไม่พลาดเป้า ในรอบถัดไป |
| THUNDERCLOUD-BLITZ | ⛈️ | THUNDERCLOUD ECHO | 8% chance to stun the enemy; if not stunned, gains 12% dodge that round instead | 8% โอกาส Stun ศัตรู ถ้าไม่ติดจะได้โอกาสหลบ 12% แทนในรอบนั้น |
| BULWARK-BLITZ | 🛡 | BULWARK ECHO | Damage taken -10%; when hit, 8% chance to stun the attacker for 1 round | ลดดาเมจที่รับ 10% และเมื่อถูกโจมตีมีโอกาส 8% ทำให้อีกฝ่าย Stun 1 รอบ |
| WARLORD-CHAMPION | ⚔️ | WARLORD ECHO | Damage dealt +10%; 5% chance to attack 4 times | ดาเมจที่สร้างเพิ่มขึ้น 10% และมีโอกาส 5% ที่จะโจมตี 4 ครั้ง |
| KING-CHAMPION | 👑 | KING ECHO | 10% chance to dodge; on dodge, ATK/DEF/SPD +5% (max 5 stacks per battle) | 10% โอกาสหลบการโจมตี เมื่อหลบสำเร็จ ATK/DEF/SPD+5% (สะสมสูงสุด 5 ครั้ง) |
| SOUL-CHAMPION | ⚖️ | SOUL ECHO | On WIN: ATK+12% and 12% chance to burn the enemy; on LOSE: dodge +12% and damage dealt +12% that round | เมื่อ WIN: ATK+12% และ 12% โอกาสทำให้ศัตรูติดเผาไหม้ เมื่อ LOSE: โอกาสหลบ+12% และดาเมจเพิ่ม 12% ในรอบนั้น |
| ROLLING-CHAMPION | 🌀 | ROLLING ECHO | Damage taken -10%; every 3 rounds the attack deals +25% damage and cannot miss | ลดดาเมจที่รับ 10% และทุกๆ 3 รอบจะโจมตีแรงขึ้น 25% และไม่พลาดเป้า |
| BLAZING-FORTRESS | 🔥 | BLAZING ECHO | On WIN: damage dealt +8% and DEF +8% per stack (max 3 stacks), 10% chance to poison the enemy | เมื่อ WIN ดาเมจ+8% และ DEF+8% สะสม (สูงสุด 3 ครั้ง) และ 10% โอกาสทำให้ศัตรูติดพิษ |
| SWIFT-FORTRESS | 🔄 | SWIFT ECHO | Every 3 turns: reflects 35% of damage taken, recovers 5% HP, and 25% chance to poison the enemy | ทุก 3 เทิร์น สะท้อนดาเมจที่รับ 35% ฟื้นฟู HP 5% และ 25% โอกาสทำให้ศัตรูติดพิษ |
| POISON-FORTRESS | ☠️ | POISON ECHO | Damage taken -5%; 12% chance to poison the enemy when hit (6% MaxHP/turn, 3 turns) | ลดดาเมจที่รับ 5% และ 12% โอกาสทำให้ศัตรูติดพิษเมื่อถูกโจมตี (6% MaxHP/เทิร์น นาน 3 เทิร์น) |
| GUARDIAN-FORTRESS | 🏰 | GUARDIAN ECHO | Damage taken -12%; while HP < 50%, reflects an extra 12% of damage taken back | ลดดาเมจที่รับ 12% และเมื่อ HP < 50% จะสะท้อนดาเมจเพิ่มอีก 12% |
| DARK-SPECTER | 🌑 | DARK ECHO | Damage dealt +10%, crit chance +12%, lifesteal 7% | ดาเมจที่สร้างเพิ่มขึ้น 10%, คริ+12%, ดูดเลือด 7% |
| SOUL-SPECTER | 👻 | SPECTER ECHO | 10% chance to dodge; on dodge, the next attack hits twice | 10% โอกาสหลบการโจมตี เมื่อหลบสำเร็จ การโจมตีถัดไปโจมตี 2 ครั้ง |
| MAGE-SPECTER | 🧙 | MAGE ECHO | On WIN: curses the enemy, ATK -12% for 2 turns; on DRAW: enemy cannot heal for 3 turns; on LOSE: damage taken -5% | เมื่อ WIN: สาปศัตรู ATK-12% นาน 2 เทิร์น เมื่อ DRAW: สาปให้ศัตรูฟื้นฟู HP ไม่ได้ 3 เทิร์น เมื่อ LOSE: ลดดาเมจที่รับ 5% |
| GRAVE-SPECTER | ⚰️ | GRAVE ECHO | Damage taken -12%; 25% chance to recover 5% HP each round | ลดดาเมจที่รับ 12% และมีโอกาส 25% ฟื้นฟู HP 5% |
| FIGHT-SWIFTGUARD | 🥋 | FIGHT ECHO | On WIN: damage dealt +8%, dodge +3%, crit chance +3% per stack (max 3 stacks) | เมื่อ WIN ดาเมจ+8%, หลบ+3%, คริ+3% (สะสมสูงสุด 3 ครั้ง) |
| QUICK-SWIFTGUARD | 💨 | QUICK ECHO | 12% chance to dodge; on dodge, the next attack pierces DEF and cannot miss | 12% โอกาสหลบการโจมตี เมื่อหลบสำเร็จ การโจมตีถัดไปทะลุ DEF และไม่พลาดเป้า |
| PHEONIX-SWIFTGUARD | 🔥 | PHOENIX ECHO | Every attack has an 8% chance to burn the enemy; once per battle when HP < 30%: heal 50% HP + ATK/DEF/SPD +8% | ทุกการโจมตีมีโอกาส 8% ทำให้ศัตรูติดเผาไหม้ เมื่อ HP<30% (ครั้งเดียว): ฟื้น HP 50% + ATK/DEF/SPD +8% |
| IRON-SWIFTGUARD | 🛡 | IRON ECHO | On LOSE: damage taken -8% per stack (max 3 stacks per battle) | เมื่อ LOSE ลดดาเมจที่รับ 8% สะสม (สูงสุด 3 ครั้ง) |
| HAMMER-SHIELDWING | 🔨 | HAMMER ECHO | On WIN: damage dealt +10%, 8% chance to stun, and the attack pierces DEF | เมื่อ WIN ดาเมจ+10%, 8% โอกาสสตัน และโจมตีทะลุ DEF |
| CHILL-SHIELDWING | ❄️ | CHILL ECHO | Every 3 turns: dodges 50%, attacks through DEF with ATK +25%, 25% chance to freeze the enemy | ทุก 3 เทิร์น: หลบ 50% โจมตีทะลุ DEF ด้วย ATK+25% และโอกาส 25% แช่แข็งศัตรู |
| GAIA-SHIELDWING | 🌿 | GAIA ECHO | Every 3 rounds: recovers 8% of Max HP and ATK/DEF +10% that round; 5% chance to freeze the enemy on hit | ทุก 3 รอบ: ฟื้น HP 8% ของ Max HP และ ATK/DEF+10% ในรอบนั้น; 5% โอกาสแช่แข็งศัตรูเมื่อโจมตี |
| FATTY-SHIELDWING | 🛡 | FATTY ECHO | Damage taken -10%; while HP > 70%, ATK/DEF +15%; while HP < 70%, ATK +25% | ลดดาเมจที่รับ 10% เมื่อ HP > 70% ATK/DEF+15% เมื่อ HP < 70% ATK+25% |
| GUANLET-BASTION | 🥊 | GUANLET ECHO | On LOSE: damage dealt +8% per stack (max 5 stacks per battle) | เมื่อ LOSE ดาเมจเพิ่มขึ้นครั้งละ 8% (สะสมสูงสุด 5 ครั้ง) |
| IRON-BASTION | 🎯 | BASTION ECHO | 10% chance to dodge; every 3 turns, attacks cannot miss, deal +25% damage, and guarantee a crit | 10% โอกาสหลบการโจมตี ทุก 3 เทิร์น โจมตีไม่พลาดเป้า ดาเมจ+25% และติดคริแน่นอน |
| CRYSTAWOLF-BASTION | 💎 | CRYSTAL ECHO | While HP > 50%: ATK+12%. While HP < 50%: DEF+12%, counter-attacks for 75% damage, 5% chance to Freeze the enemy when hit | เมื่อ HP > 50%: ATK+12% เมื่อ HP < 50%: DEF+12%, โต้กลับดาเมจ 75%, 5% โอกาสแช่แข็งศัตรูเมื่อโดนโจมตี |
| GOLEM-BASTION | 🗿 | GOLEM ECHO | Damage taken -10%; while HP < 30%, ATK +15% and recovers 2.5% HP each round | ลดดาเมจที่รับ 10% เมื่อ HP < 30% ATK+15% และฟื้นฟู HP 2.5% |
| RAGEBEAR-GHOST | 💢 | RAGE ECHO | Damage +50% when enemy HP > 50% | ดาเมจ +50% เมื่อศัตรูมี HP > 50% |
| LION-GHOST | 👑 | ROAR ECHO | First 5 turns: crit chance +50% and permanently reduce enemy ATK by 5% | 5 เทิร์นแรก: โอกาสคริ +50% และลด ATK ศัตรู 5% ตลอดการต่อสู้ |
| TIGER-GHOST | 🐯 | TIGER ECHO | On WIN: damage +25%; on LOSE: SPD+50% next round | เมื่อ WIN: ดาเมจ+25% เมื่อ LOSE: SPD+50% รอบถัดไป |
| WOLF-GHOST | 🐺 | WOLF ECHO | 12% chance to attack twice (20% when HP<50%) | โอกาส 12% โจมตี 2 ครั้ง (20% เมื่อ HP<50%) |
| SHARK-GHOST | 🦈 | SHARK ECHO | +15% damage and 15% lifesteal vs enemies with HP<50% | ดาเมจ+15% และดูดเลือด 15% ใส่ศัตรู HP<50% |
| MANTIS-GHOST | ⚔️ | MANTIS ECHO | Crit damage x2. When HP<20%: damage +25% | คริติคอลดาเมจ x2 เมื่อ HP<20%: ดาเมจ+25% |
| BEE-GHOST | 🐝 | SWARM ECHO | 10% chance to attack 3 times; on success, 25% chance to poison enemy | โอกาส 10% โจมตี 3 ครั้ง เมื่อสำเร็จ โอกาส 25% ทำให้ศัตรูติดพิษ |
| BUNNY-GHOST | 🐰 | BUNNY ECHO | 10% dodge; on dodge: ATK/SPD+25% next round | หลบ 10% เมื่อหลบสำเร็จ ATK/SPD+25% รอบถัดไป |
| TRICKFOX-GHOST | 🎭 | TRICK ECHO | SPD+12% for the whole battle; 25% chance to Burn the enemy for 3 turns | SPD+12% ในการต่อสู้ และโอกาส 25% ทำให้ศัตรูติดสถานะเผาไหม้ 3 เทิร์น |
| OWL-GHOST | 👁️ | OWL ECHO | Attacks never miss; 10% chance to Blind enemy on hit | โจมตีไม่พลาดเป้า โอกาส 10% ทำให้ศัตรูตาบอดเมื่อโจมตี |
| VOLTMOUSE-GHOST | ⚡ | VOLT ECHO | Every turn: random effect — stun enemy, ATK-50%, DEF-50%, or give enemy ATK+25% | ทุกเทิร์นมีโอกาสสุ่ม ทำให้ศัตรูสตัน,ลด ATK 50%,ลด DEF 50%, เพิ่ม ATK 25%(ให้ศัตรู) |
| PENGUIN-GHOST | 🐧 | PENGUIN ECHO | Damage taken -10%; when HP<50%: dodge+10%, ATK+15%, and 7% chance to Freeze the enemy | ลดดาเมจ 10% เมื่อ HP<50%: หลบ+10%, ATK+15% และ 7% โอกาสแช่แข็งศัตรู |
| COCKROACH-GHOST | 🪳 | ROACH ECHO | Survive a fatal blow with 1 HP (once), then ATK/DEF/SPD+50% for rest of battle | เหลือ HP 1 เมื่อถูกโจมตีถึงตาย (1 ครั้ง) จากนั้น ATK/DEF/SPD+50% ตลอดการต่อสู้ |
| SLIME-GHOST | 🟢 | OOZE ECHO | Recover 3% HP/round; 15% chance to poison on attack or when hit | ฟื้น HP 3% ทุกรอบ โอกาส 15% ทำให้ศัตรูติดพิษเมื่อโจมตีหรือถูกโจมตี |
| LEAPFROG-GHOST | 💦 | FROG ECHO | 15% chance to reflect 25% damage and poison the enemy | โอกาส 15% สะท้อนดาเมจ 25% และทำให้ศัตรูติดพิษ |
| HAMSTER-GHOST | 🐹 | HAMSTER ECHO | Every 3 turns: recover 10% HP and DEF+25% that round | ทุก 3 เทิร์น: ฟื้น HP 10% และ DEF+25% ในรอบนั้น |
| AXOLOTL-GHOST | 🦎 | AXOLOTL ECHO | 5% chance to dodge; when hit, 30% chance to recover 10% HP | โอกาสหลบ 5% เมื่อถูกโจมตีโอกาส 30% ฟื้น HP 10% |
| CAT-GHOST | 😼 | CAT ECHO | 10% dodge; if hit: ATK/SPD+30% next round | หลบ 10% ถ้าโดนโจมตี: ATK/SPD+30% รอบถัดไป |
| DRAGON-GHOST | 🔥 | DRAGON ECHO | ATK/DEF/SPD +1.5%/round (max 10 stacks); 8% chance to Burn enemy | ATK/DEF/SPD +1.5% ต่อรอบ (สูงสุด 10 ครั้ง) โอกาส 8% เผาศัตรู |
| GRIFFON-GHOST | 🦅 | GRIFFON ECHO | For the whole battle: 10% dodge, 10% crit, SPD+10%; on crit: enemy cannot heal for 3 turns | ในการต่อสู้ หลบ 10%, Crit+10%, SPD+10% เมื่อคริ: ศัตรูฟื้นฟู HP ไม่ได้ 3 เทิร์น |
| OCTOPUS-GHOST | 🐙 | OCTOPUS ECHO | 15% chance to Blind enemy on hit (50% miss for 3 turns) | โอกาส 15% ทำให้ศัตรูตาบอด (โจมตีพลาด 50% 3 เทิร์น) |
| PHOENIX-GHOST | 🔱 | PHOENIX ECHO | Once: revive with 50% HP, Burn enemy for 5 turns | ครั้งเดียว: ฟื้นคืนชีพด้วย HP 50% เผาศัตรู 5 เทิร์น |
| UNICORN-GHOST | ✨ | UNICORN ECHO | Recover 4% HP/turn; cleanse 1 debuff every turn (Curse/No-Heal/Burn/Poison/Stun/Blind/Heal-Block — covers all types) | ฟื้น HP 4% ต่อเทิร์น ล้างดีบัฟ 1 อย่างต่อเทิร์น (Curse/No-Heal/Burn/Poison/Stun/Blind/Heal-Block — ครอบคลุมทุกประเภท) |
| PANDA-GHOST | ☯️ | PANDA ECHO | Crit+15%; 13% chance to stun on hit | Crit+15% โอกาสสตัน 13% เมื่อโจมตี |
| RED-SENTINEL-GHOST | 🔴 | SENTINEL'S FURY | On WIN: ATK +7% per stack (max 5 per battle); every 3 turns, guaranteed crit (x1.5) | เมื่อ WIN: ATK+7% ต่อครั้ง (สะสมสูงสุด 5 ครั้ง) ทุก 3 เทิร์น โจมตีติดคริติคอลแน่นอน (ดาเมจ x1.5) |
| IFRIT-GHOST | 🔥 | EMBER TOUCH | 15% chance to Burn the enemy on hit; on WIN: ATK +5% per stack (max 5 per battle) | โอกาส 15% ทำให้ศัตรูติดเผาไหม้เมื่อโจมตี และเมื่อ WIN: ATK+5% ต่อครั้ง (สะสมสูงสุด 5 ครั้ง) |
| BABARIAN-GHOST | 🪓 | BERSERK ECHO | Damage dealt +15% per 10% HP missing (max +105%) | ดาเมจที่สร้างเพิ่มขึ้น 15% ต่อทุก 10% HP ที่หายไป (สูงสุด +105%) |
| SAMURAI-GHOST | ⚔️ | SWIFT BLADE | Crit chance +50%; dodge chance +10% | โอกาสคริ +50% และโอกาสหลบเพิ่ม 10% |
| BLUE-SENTINEL-GHOST | 🔵 | WAVE STEP | 12% chance to dodge; on dodge, next attack ATK+25% and pierces DEF | 12% โอกาสหลบการโจมตี เมื่อหลบสำเร็จ การโจมตีครั้งถัดไป ATK+25% และทะลุ DEF |
| RANGER-GHOST | 🏹 | STEADY AIM | 50% chance for attacks to never miss; 10% chance to attack twice | โอกาส 50% ที่จะโจมตีไม่พลาดเป้า และ โอกาส 10% โจมตี 2 ครั้ง |
| VALKYLIE-GHOST | 👼 | GUARDIAN WING | On WIN: heal 5% Max HP, dodge+8%, and ATK+10% next round | เมื่อ WIN: ฟื้น HP 5% ของ Max HP, โอกาสหลบ+8% และ ATK+10% ในรอบถัดไป |
| ARC-ANGEL-GHOST | 😇 | BLESSED LIGHT | 50% chance each turn to cleanse a debuff; when HP<50%: 25% chance to stun the enemy and dodge+7% | ทุกเทิร์นมีโอกาส 50% ล้างดีบัฟ 1 อย่าง เมื่อ HP<50%: โอกาสสตันศัตรู 25% และโอกาสหลบ+7% |
| GREEN-SENTINEL-GHOST | 🟢 | THORNED BARK | 20% chance to halve incoming damage; regen 2% Max HP/turn | 20% โอกาสลดดาเมจที่รับครึ่งหนึ่ง และฟื้น HP 2% ของ Max HP ทุกเทิร์น |
| SKELETON-KING-GHOST | 💀 | BONE GUARD | 10% lifesteal on every attack; once per battle, revive with 50% HP on death | ดูดเลือด 10% ทุกการโจมตี และเมื่อตาย ฟื้นคืนชีพด้วย HP 50% (1 ครั้ง/การต่อสู้) |
| DRAGON-KNIGHT-GHOST | 🐉 | SCALE GUARD | Reflects 20% of damage received; when HP<50%: DEF+12% and regen 1.5% Max HP/turn | สะท้อนดาเมจที่รับ 20% กลับไปยังศัตรู เมื่อ HP<50%: DEF+12% และฟื้น HP 1.5% ต่อเทิร์น |
| ARC-DEMON-GHOST | 😈 | DARK WHISPER | 25% chance on hit to inflict a random debuff (Poison/Burn/Curse/Blind/Heal-Block/Freeze) | โอกาส 25% สุ่มดีบัฟ 1 อย่างใส่ศัตรูเมื่อโจมตี (พิษ/เผาไหม้/คำสาป/ตาบอด/ห้ามฮีล/แช่แข็ง) |
| BAHAMUT-GHOST | 🐲 | DRACONIC PULSE | On WIN: ATK+50%, DEF-25%. On LOSE: DEF+50%, ATK-25% | เมื่อ WIN: ATK+50% DEF-25% เมื่อ LOSE: DEF+50% ATK-25% |
| DRAGON-TAMER-GHOST | 🤝 | BONDED ECHO | On WIN: attacks pierce DEF and 25% chance to Burn the enemy. On LOSE: DEF+15% | เมื่อ WIN: โจมตีทะลุ DEF และ โอกาส 25% ทำให้ศัตรูติดเผาไหม้ เมื่อ LOSE: DEF+15% |
| ALIEN-GHOST | 👽 | ALIEN RESISTANCE | While Poisoned/Burned/Cursed/Frozen, the debuff runs its normal duration but its effect is inverted into a benefit instead (half strength); 8% chance to Blind the enemy on hit | เมื่อโดน พิษ/เผาไหม้/คำสาป/แช่แข็ง ดีบัฟจะยังคงอยู่ตามเวลาปกติ แต่ผลที่ได้รับกลายเป็นตรงกันข้าม (เป็นผลดีแทน ครึ่งกำลัง) และโอกาส 8% ทำให้ศัตรูตาบอดเมื่อโจมตี |
| SHIVA-GHOST | 🔱 | BALANCE ECHO | Every 3 turns: damage dealt x1.5 and 25% chance to Freeze the enemy | ทุก 3 เทิร์น: ดาเมจที่สร้าง x1.5 และโอกาส 25% แช่แข็งศัตรู |
