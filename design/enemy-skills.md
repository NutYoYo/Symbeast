# SYMBEAST — Enemy Skills

Source of truth for this sheet going forward, migrated from `design/SYMBEAST_Evolve_Forms.xlsx`.

## Enemy Skills

*SYMBEAST — Enemy Skills (สุ่มติดตัวมอนสเตอร์ทั่วไป/มินิบอส/บอส, 17 แบบ)*

*pickEnemyPassives(): เลือกจากสกิลธาตุตรงก่อน + มีโอกาส 30% ปนสกิลธาตุอื่น \| จำนวนสกิล/ตัว: mon ทั่วไป 1, mini-boss 1-2, boss 2-3*

| Type | ID | Icon | ชื่อ (EN) | ชื่อ (TH) | Effect (EN) | Effect (TH) |
|---|---|---|---|---|---|---|
| F | atk_boost |  | POWER UP | เพิ่มพลัง | ATK ×1.25 | ATK ×1.25 |
| F | lifesteal | 喝 | LIFESTEAL | ดูดเลือด | Drains 15% of damage dealt as HP | ดูดเลือด 15% จากดาเมจที่สร้างเป็น HP |
| F | crit_boost |  | CRIT BOOST | เพิ่มคริ | Critical hit chance +25% | โอกาสคริติคอล +25% |
| F | double_strike | ⚔️ | DOUBLE STRIKE | โจมตีสองครั้ง | 20% chance to attack twice in one round | 20% โอกาสโจมตีสองครั้งในรอบเดียว |
| F | berserker |  | BERSERKER | คลั่งเลือด | Each round, ATK +10% (stacks up to +50%) | ทุกรอบ ATK +10% (สะสมสูงสุด +50%) |
| F | enrage | ⚔️ | ENRAGE | ความโกรธเกรี้ยว | When HP drops below 50%, ATK +50% | เมื่อ HP ต่ำกว่า 50% ATK +50% |
| F | last_dance |  | LAST DANCE | ระบำสุดท้าย | When HP drops below 10%, ATK +150% | เมื่อ HP ต่ำกว่า 10% ATK +150% |
| W | dodge |  | EVASION | หลบหลีก | 25% chance to dodge attacks | 25% โอกาสหลบการโจมตี |
| W | counter_rush |  | COUNTER RUSH | สวนกลับฉับพลัน | 25% chance to counter attacks with damage 75% | 25% โอกาสโจมตีโต้กลับด้วยดาเมจ 75% |
| W | venom_bite | ☠️ | VENOM BITE | กัดพิษ | 20% chance to poison you on a landed hit (6% MaxHP/turn, 3 turns) | 20% โอกาสวางพิษใส่ผู้เล่นเมื่อโจมตีโดน (6% MaxHP/เทิร์น นาน 3 เทิร์น) |
| S | reflect |  | REFLECT | สะท้อนดาเมจ | Reflects 15% of damage received | สะท้อนดาเมจที่รับ 15% |
| S | dmg_reduce | ⬛ | IRON BODY | กายาเหล็ก | When HP is above 50%, incoming damage is halved | เมื่อ HP เกิน 50% ดาเมจที่รับลดลงครึ่งหนึ่ง |
| S | barrier |  | BARRIER | เกราะป้องกัน | Every 3 rounds, takes 50% less damage | ทุก 3 รอบ รับดาเมจน้อยลง 50% |
| S | stun_player | ⚡ | PARALYZE | อัมพาต | 15% chance to stun you — your attack misses | 15% โอกาส Stun ผู้เล่น — การโจมตีพลาด |
| F,W,S | true_strike |  | TRUE STRIKE | โจมตีแม่นยำ | Attacks cannot be dodged | การโจมตีหลบไม่ได้ |
| F | reflect_immune |  | REFLECT WARD | กันสะท้อน | Takes no damage from any reflect/counter effect | ไม่ได้รับดาเมจจากการสะท้อนหรือ Counter ใดๆ |
| W | pierce_atk | ️ | PIERCE | ทะลุทะลวง | Attacks ignore DEF and all damage-reduction effects | โจมตีทะลุ DEF และเอฟเฟกต์ลดดาเมจทั้งหมด |
| F,W,S | heal_block | 🚫💚 | HEAL BLOCK | บล็อคการฮีล | 25% chance to prevent enemy healing for 3 turns | 25% โอกาสสกัดกั้นการฟื้นฟูของศัตรู 3 เทิร์น |
| W | blind_gaze | 👁️ | BLIND GAZE | จ้องตาบอด | 20% chance to blind you on a landed hit (50% miss chance for 3 turns) | 20% โอกาสทำให้ผู้เล่นตาบอดเมื่อโจมตีโดน (โจมตีพลาด 50% นาน 3 เทิร์น) |
| S | regen_cleanse | 💚 | REGENERATION | ฟื้นฟู | Heals 3% MaxHP and cleanses its own debuffs every turn | ฟื้นฟู HP 3% และล้างดีบัพของตัวเองทุกเทิร์น |
