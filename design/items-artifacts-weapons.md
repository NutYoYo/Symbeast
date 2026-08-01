# SYMBEAST — Items, Artifacts & Weapons

Source of truth for these 3 sheets going forward, migrated from `design/SYMBEAST_Evolve_Forms.xlsx`.

## Items

*SYMBEAST — Items (23 ชิ้น)*

| ID | Icon | ชื่อ (EN) | ชื่อ (TH) | Effect (EN) | Effect (TH) |
|---|---|---|---|---|---|
| hp_potion | 離 | HP Potion | ยา HP | Restores 30% Max HP instantly | ฟื้นฟู HP 25% ของ HP สูงสุด ทันที |
| super_potion | 溺 | Super Potion | ยา Super | Restores 60% Max HP instantly | ฟื้นฟู HP 50% ของ HP สูงสุด ทันที |
| max_potion |  | Max Potion | ยา Max | Fully restores HP | ฟื้นฟู HP เต็มทันที |
| power_shard |  | Power Shard | เศษพลัง | Increases ATK by 20% for 30 minutes | เพิ่ม ATK 20% เป็นเวลา 30 นาที |
| speed_shard |  | Speed Shard | เศษความเร็ว | Increases SPD by 20% for 30 minutes | เพิ่ม SPD 20% เป็นเวลา 30 นาที |
| guard_shard |  | Guard Shard | เศษการ์ด | Increases DEF by 20% for 30 minutes | เพิ่ม DEF 20% เป็นเวลา 30 นาที |
| sym_F | ✊ | Symbol: FIST | สัญลักษณ์: กำปั้น | Grants a FIST symbol to your beast | มอบ Symbol กำปั้นให้กับสัตว์ของคุณ |
| sym_W | 襁 | Symbol: WING | สัญลักษณ์: ปีก | Grants a WING symbol to your beast | มอบ Symbol ปีกให้กับสัตว์ของคุณ |
| sym_S |  | Symbol: SHIELD | สัญลักษณ์: โล่ | Grants a SHIELD symbol to your beast | มอบ Symbol โล่ให้กับสัตว์ของคุณ |
| map_scroll | ️ | Map Scroll | แผนที่ม้วน | Rerolls the Scout map with a new layout | สุ่มแผนที่ Scout ใหม่ |
| essence | ✨ | Essence | เอสเซ้นซ์ | Permanently boosts a random stat (ATK+2, SPD+2, DEF+2, or HP+10) | เพิ่มสถิติแบบสุ่มถาวร (ATK+2, SPD+2, DEF+2 หรือ HP+10) |
| rebirth_stone |  | Rebirth Stone | หินจุติ | Allows a pet in evolved or Evolve II form to reincarnate, gaining permanent stat bonuses. Also required for Evolve II | ให้ pet ที่อยู่ใน evolved หรือ Evolve II จุติใหม่ รับโบนัสสแตทถาวร และยังใช้สำหรับ Evolve II ด้วย |
| perm_atk |  | Power Essence | เอสเซ้นซ์พลัง | Permanently increases ATK by 2 | เพิ่ม ATK ถาวร 2 |
| perm_spd | ️ | Speed Essence | เอสเซ้นซ์ความเร็ว | Permanently increases SPD by 2 | เพิ่ม SPD ถาวร 2 |
| perm_def |  | Def Essence | เอสเซ้นซ์การ์ด | Permanently increases DEF by 2 | เพิ่ม DEF ถาวร 2 |
| perm_hp |  | HP Essence | เอสเซ้นซ์ชีวิต | Permanently increases Max HP by 5 | เพิ่ม HP สูงสุดถาวร 5 |
| revive |  | Revive Stone | หินฟื้นคืนชีพ | Revives your beast with 50% HP when it falls in battle | ฟื้นคืนชีพสัตว์ด้วย HP 50% เมื่อล้มในการต่อสู้ |
| energy_drink | ⚡ | Energy Drink | เครื่องดื่มพลังงาน | Restores 15 Stamina instantly | ฟื้นฟู Stamina 15 ทันที |
| mystery_egg | 讀 | Mystery Egg | ไข่ลึกลับ | Hatches into a new beast | ฟักออกมาเป็นสัตว์ใหม่ |
| shiny_egg | ✨讀 | Shiny Egg | ไข่ชายนี่ | Hatches into a guaranteed Shiny beast! | ฟักออกมาเป็นสัตว์ Shiny การันตี! |
| artifact_box |  | Artifact Box | กล่องอาติแฟค | Opens to reveal a random Artifact: Normal (60%), Rare (35%), or Epic (5%) | เปิดเพื่อรับ Artifact แบบสุ่ม: Normal (60%), Rare (35%) หรือ Epic (5%) |
| box_R |  | Artifact Rare Box | กล่อง Artifact Rare | Opens to reveal a guaranteed Rare [R] Artifact | เปิดเพื่อรับ Artifact เกรด Rare [R] การันตี |
| box_E | ✨ | Artifact Epic Box | กล่อง Artifact Epic | Opens to reveal a guaranteed Epic [E] Artifact | เปิดเพื่อรับ Artifact เกรด Epic [E] การันตี |

## Artifacts

*SYMBEAST — Artifacts (37 ชิ้น, ใส่ได้ 2 slot)*

*Lifesteal artifacts (crimson_fang/blood_pact/soul_reaper) คำนวณหลัง ATK boosts ทั้งหมด (deferred) \| Poison 6% MaxHP/เทิร์น นาน 3 เทิร์น ไม่ stack (รีเฟรชเมื่อโดนซ้ำ) \| สเตตัสล้วน (ATK/DEF/SPD/HP shard, all_stats) ย้ายไปอยู่ระบบ Weapon แยกต่างหากแล้ว*

| Grade | Icon | ID | ชื่อ (EN) | ชื่อ (TH) | Effect (EN) | Effect (TH) |
|---|---|---|---|---|---|---|
| N | ⚡ | shock_bead | Shock Bead | ลูกปัดช็อต | In battle: 8% chance to stun the enemy each round | ในการต่อสู้: 8% โอกาส Stun ศัตรูทุกรอบ |
| N |  | keen_edge | Keen Edge | คมแห่งคม | In battle: Increases critical hit chance by 10% | ในการต่อสู้: เพิ่มโอกาสคริติคอล 10% |
| N |  | blade_shard | Blade Shard | เศษใบมีด | In battle: Increases ATK by 10%, crit chance +5% | ในการต่อสู้: เพิ่ม ATK 10%,  เพิ่มโอกาสคริติคอล 5% |
| N |  | iron_plate | Iron Plate | แผ่นเหล็ก | In battle: Reduces all damage received by 15% | ในการต่อสู้: ลดดาเมจที่รับทั้งหมด 15% |
| N |  | swift_ring | Swift Ring | แหวนฉับพลัน | In battle: 10% chance to dodge attacks | ในการต่อสู้: 10% โอกาสหลบการโจมตี |
| N |  | life_seed | Life Seed | เมล็ดชีวิต | In battle: Regenerates 4% of Max HP each round | ในการต่อสู้: ฟื้นฟู HP สูงสุด 4% ทุกรอบ |
| N | 喝 | crimson_fang | Crimson Fang | เขี้ยวเลือด | In battle: Drains 5% of damage dealt as HP each round | ในการต่อสู้: ดูดเลือด 5% จากดาเมจที่โจมตีทุกรอบ |
| N | 直 | stone_skin | Stone Skin | หนังหิน | In battle: Reduces damage taken by 10% while HP > 70% | ในการต่อสู้: ลดดาเมจที่รับ 10% เมื่อ HP > 70% |
| N |  | lucky_charm | Lucky Charm | เครื่องรางโชค | After winning a battle: Gold earned x1.5 | หลังชนะการต่อสู้: ได้ Gold เพิ่มขึ้น x1.5 |
| N |  | venom_fang | Venom Fang | เขี้ยวพิษ | In battle: On attack, 15% chance to poison the opponent (6% MaxHP/turn, 3 turns) | ในการต่อสู้: เมื่อโจมตี 20% โอกาสวางพิษใส่คู่ต่อสู้ (6% MaxHP/เทิร์น นาน 3 เทิร์น) |
| R |  | death_mark | Death Mark | ตราแห่งความตาย | In battle: When HP drops below 30%, ATK increases by 75% | ในการต่อสู้: เมื่อ HP ต่ำกว่า 30% ATK เพิ่ม 75% |
| R |  | precision_stone | Precision Stone | หินแม่นยำ | In battle: Every 3 rounds, deal 1.5x damage | ในการต่อสู้: ทุก 3 รอบ โจมตีด้วยดาเมจ 1.5 เท่า |
| R | 醴 | paralysis_fang | Paralysis Fang | เขี้ยวอัมพาต | In battle: 15% chance to stun the enemy; if stunned, ATK +30% next round | ในการต่อสู้: 15% โอกาส Stun ศัตรู หาก Stun ATK +30% รอบถัดไป |
| R |  | berserker_claw | Berserker Claw | กรงเล็บคลั่ง | In battle: ATK +25%, Crit chance +20%, but you take 10% more damage | ในการต่อสู้: ATK +25%, โอกาสคริติคอล +20% แต่รับดาเมจเพิ่ม 10% |
| R | ⛓ | victory_chain | Victory Chain | โซ่แห่งชัยชนะ | In battle: Each WIN increases ATK by 20%, stacking up to 3 times | ในการต่อสู้: ทุกครั้งที่ชนะ ATK +20% สะสมสูงสุด 3 ครั้ง |
| R | 爵 | reflect_coat | Reflect Coat | เสื้อสะท้อน | In battle: Reflects 15% of damage received back to the enemy | ในการต่อสู้: สะท้อนดาเมจที่รับ 15% กลับไปยังศัตรู |
| R |  | wind_step | Wind Step | ก้าวลม | In battle: 15% chance to dodge attacks | ในการต่อสู้: 15% โอกาสหลบการโจมตี |
| R |  | rage_core | Rage Core | แก่นแห่งความโกรธ | In battle: Each hit received increases ATK by 15%, up to 3 stacks | ในการต่อสู้: ทุกครั้งที่โดนตี ATK +15% สะสมสูงสุด 3 ครั้ง |
| R |  | drain_aura | Drain Aura | ออร่าดูดพลัง | In battle: Each LOSE reduces enemy ATK by 15%, up to 2 stacks | ในการต่อสู้: ทุกครั้งที่แพ้ ATK ศัตรู -15% สะสมสูงสุด 2 ครั้ง |
| R |  | blood_pact | Blood Pact | สัญญาเลือด | In battle: Drains 15% of damage dealt as HP each round | ในการต่อสู้: ดูดเลือด 15% จากดาเมจที่โจมตีทุกรอบ |
| R |  | tide_breaker | Tide Breaker | ทลายกระแส | In battle: If you lost last round, ATK +75% this round | ในการต่อสู้: ถ้าแพ้รอบที่แล้ว ATK +75% รอบนี้ |
| R |  | crit_core | Crit Core | แก่นคริ | In battle: Crit chance +20%; on crit, heal 5% max HP | ในการต่อสู้: โอกาสคริ +20%; เมื่อคริ ฟื้น HP 5% ของ HP สูงสุด |
| R | 離 | toxic_coat | Toxic Coat | เสื้อพิษ | In battle: When hit, 25% chance to poison the attacker | ในการต่อสู้: เมื่อโดนโจมตี 25% โอกาสวางพิษใส่ผู้โจมตี |
| R |  | antidote_charm | Antidote Charm | เครื่องรางแก้พิษ | In battle: Complete immunity to poison | ในการต่อสู้: ป้องกันพิษได้สมบูรณ์ |
| E |  | iron_will | Iron Will | ใจเหล็ก | In battle: Survive one fatal blow (once per battle). The next attack deals ATK +300% | ในการต่อสู้: รอดจากการโจมตีที่จะทำให้ตาย 1 ครั้ง/การต่อสู้ การโจมตีครั้งถัดไป ATK +300% |
| E |  | true_sight | True Sight | สายตาแท้ | In battle: The enemy cannot dodge your attacks. ATK +50% | ในการต่อสู้: ศัตรูไม่สามารถหลบการโจมตีของคุณได้ และ ATK +50% |
| E |  | moon_veil | Moon Veil | ม่านจันทร์ | In battle: Regenerates 5% Max HP each round. ATK/DEF/SPD +10% | ในการต่อสู้: ฟื้นฟู HP สูงสุด 5% ทุกรอบ และ ATK/DEF/SPD +10% |
| E | ⚔ | double_attack | Double Attack | โจมตีสองครั้ง | In battle: 20% chance to attack twice in one round | ในการต่อสู้: 20% โอกาสโจมตีสองครั้งในรอบเดียว |
| E |  | wild_card | Wild Card | ไพ่มหัศจรรย์ | In battle: 25% chance to randomly Heal/ATK×1.5/Reflect(30% each) or Bad Luck +50% dmg taken (10%) | ในการต่อสู้: 25% โอกาสสุ่ม Heal/ATK×1.5/Reflect (30% ต่ออัน) หรือ Bad Luck โดนดาเมจ+50% (10%) |
| E | ☠ | execution | Execution | ประหาร | In battle: When your HP drops below 20%, deal 200% more damage | ในการต่อสู้: เมื่อ HP ของคุณต่ำกว่า 20% โจมตีเพิ่ม 200% |
| E |  | chain_strike | Chain Strike | โจมตีลูกโซ่ | In battle: WIN streak bonus - x1: 50% ATK / x2: 100% ATK / x3: 200% ATK. Breaks on non-WIN. | ในการต่อสู้: ชนะต่อเนื่อง — ×1: 50% ATK / ×2: 100% ATK / ×3: 200% ATK \| ไม่ชนะ = รีเซ็ต |
| E | ☠️ | soul_reaper | Soul Reaper | เกี่ยวเกลียวจิตวิญญาณ | In battle: Drains 25% of damage dealt as HP each round | ในการต่อสู้: ดูดเลือด 25% จากดาเมจที่โจมตีทุกรอบ |
| E |  | deathblow | Deathblow | ฆ่าตัดตอน | In battle: Crit chance +15% and crit deals ×2.0 damage | ในการต่อสู้: โอกาสคริ +15% และคริดาเมจ ×2.0 |
| E |  | sniper_eye | Sniper Eye | ตานักแม่น | In battle: Every 3 rounds, guaranteed critical hit (×2.0 damage) | ในการต่อสู้: ทุก 3 รอบ คริติคอลแน่นอน (ดาเมจ ×2.0) |
| E | ☣️ | plague_scythe | Plague Scythe | เคียวกาฬโรค | In battle: On attack, 30% chance to poison; deals +50% damage to an already-poisoned opponent | ในการต่อสู้: เมื่อโจมตี 30% โอกาสวางพิษ และดาเมจ +50% ถ้าคู่ต่อสู้ติดพิษอยู่แล้ว |
| R |  | reflect_ward | Reflect Ward | เครื่องรางกันสะท้อน | In battle: Takes no damage from any reflect/counter effect | ในการต่อสู้: ไม่ได้รับดาเมจจากการสะท้อนหรือ Counter ใดๆ |
| E | ️ | piercing_fang | Piercing Fang | เขี้ยวทะลุทะลวง | In battle: ATK +25% and attacks pierce 50% of enemy DEF and damage-reduction effects | ในการต่อสู้: ATK+25% และโจมตีทะลุ DEF และเอฟเฟกต์ลดดาเมจของศัตรู 50% |
| N | 💚 | vitality_core | Vitality Core | แก่นชีวิต | Increases Max HP by 20% when equipped | เพิ่ม HP สูงสุด 20% เมื่อสวมใส่ |
| N | 🗡️ | atk_shard | ATK Shard | เศษพลังโจมตี | ATK +15% when equipped | ATK +15% เมื่อสวมใส่ |
| N | 🛡️ | def_shard | DEF Shard | เศษพลังป้องกัน | DEF +15% when equipped | DEF +15% เมื่อสวมใส่ |
| N | 💨 | spd_shard | SPD Shard | เศษความเร็ว | SPD +15% when equipped | SPD +15% เมื่อสวมใส่ |
| N | ❤️ | hp_core | HP Core | แก่น HP | Max HP +15% when equipped | HP สูงสุด +15% เมื่อสวมใส่ |
| R | ⛓️ | cursed_shackle | Cursed Shackle | ตรวนต้องสาป | In battle: 25% chance to prevent enemy healing for 3 turns | ในการต่อสู้: 25% โอกาสสกัดกั้นการฟื้นฟูของศัตรู 3 เทิร์น |
| R | 💠 | all_stats_r | Power Crest | ตราพลัง | All stats (ATK/DEF/SPD/HP) +15% when equipped | ทุก Stat (ATK/DEF/SPD/HP) +15% เมื่อสวมใส่ |
| E | 🔷 | all_stats_e | Omega Crest | ตราโอเมก้า | All stats (ATK/DEF/SPD/HP) +25% when equipped | ทุก Stat (ATK/DEF/SPD/HP) +25% เมื่อสวมใส่ |
| N | ❄️ | frost_bead | Frost Bead | ลูกปัดน้ำแข็ง | In battle: 8% chance to Freeze the enemy on hit | ในการต่อสู้: 8% โอกาสทำให้ศัตรูติด Freeze เมื่อโจมตี |
| R | 👁️ | clouded_lens | Clouded Lens | เลนส์หมอกมัว | In battle: 20% chance to Blind the enemy on hit | ในการต่อสู้: 20% โอกาสทำให้ศัตรูตาบอดเมื่อโจมตี |
| R | ❄️ | rimefrost_fang | Rimefrost Fang | เขี้ยวน้ำแข็ง | In battle: 15% chance to Freeze the enemy on hit | ในการต่อสู้: 15% โอกาสทำให้ศัตรูติด Freeze เมื่อโจมตี |
| E | 🔮 | tri_attack | Tri-Attack | ไตรอาวุธ | In battle: Each attack has a 25% chance to randomly inflict Freeze, Burn, or Poison on the enemy | ในการต่อสู้: ทุกการโจมตีมีโอกาส 25% สุ่มทำให้ศัตรูติด Freeze, Burn หรือ Poison อย่างใดอย่างหนึ่ง |

## Weapons

*SYMBEAST — Weapons (33 ชิ้น, สวมใส่ได้ 1 ชิ้น) — v2: ค่าคงที่ (flat) แทน % + พาสซีฟเล็กน้อยใน Rare/Epic*

*Normal = ค่าสเตตัสล้วน ไม่มีพาสซีฟ \| Rare/Epic = ค่าสเตตัส + พาสซีฟเล็กน้อย 1 อย่าง (โจมตี 2 ครั้ง / บล็อก / หลบ / ฟื้นฟู / วางพิษ / ดาเมจ+% เมื่อชนะ)*

| Grade | Icon | ID | ชื่อ (EN) | ชื่อ (TH) | Stat Bonus (EN) | Stat Bonus (TH) | Passive (EN) | Passive (TH) |
|---|---|---|---|---|---|---|---|---|
| N | ️ | iron_sword | Iron Sword | ดาบเหล็ก | ATK +30 | ATK +30 |  |  |
| N | ️ | iron_shield | Iron Shield | โล่เหล็ก | DEF +30 | DEF +30 |  |  |
| N |  | iron_boots | Iron Boots | รองเท้าเหล็ก | SPD +30 | SPD +30 |  |  |
| N |  | iron_amulet | Iron Amulet | เครื่องรางเหล็ก | MaxHP +150 | HP สูงสุด +150 |  |  |
| N |  | iron_bow | Iron Bow | ธนูเหล็ก | ATK +20, SPD +20 | ATK +20, SPD +20 |  |  |
| N | ️ | iron_plate | Iron Plate | แผ่นเกราะเหล็ก | DEF +20, MaxHP +100 | DEF +20, HP สูงสุด +100 |  |  |
| N |  | modest_crest | Modest Crest | ตราพอประมาณ | ATK +10, DEF +10, SPD +10, MaxHP +50 | ATK +10, DEF +10, SPD +10, HP สูงสุด +50 |  |  |
| N |  | iron_spear | Iron Spear | หอกเหล็ก | ATK +20, DEF +20 | ATK +20, DEF +20 |  |  |
| N | 痢 | iron_cloak | Iron Cloak | เสื้อคลุมเหล็ก | SPD +20, MaxHP +100 | SPD +20, HP สูงสุด +100 |  |  |
| N | 壘 | iron_gauntlet | Iron Gauntlet | ถุงมือเหล็ก | ATK +20, MaxHP +100 | ATK +20, HP สูงสุด +100 |  |  |
| N |  | iron_circlet | Iron Circlet | มงกุฎเหล็ก | DEF +20, SPD +20 | DEF +20, SPD +20 |  |  |
| R | ⚔️ | steel_blade | Steel Blade | ดาบเหล็กกล้า | ATK +50 | ATK +50 | 10% chance to attack damage +50% | 10% โอกาสโจมตีแรงขึ้น 50% |
| R | ️ | steel_wall | Steel Wall | กำแพงเหล็กกล้า | DEF +50 | DEF +50 | 10% chance to block (-50% damage that hit) | 10% โอกาสบล็อก (ลดดาเมจ 50% ในครั้งนั้น) |
| R | 量 | steel_greaves | Steel Greaves | สนับแข้งเหล็กกล้า | SPD +50 | SPD +50 | 5% chance to dodge attacks | 5% โอกาสหลบการโจมตี |
| R |  | steel_heart | Steel Heart | หัวใจเหล็กกล้า | MaxHP +200 | HP สูงสุด +200 | 10% chance to regen 5% Max HP at end of turn | 10% โอกาสฟื้นฟู HP 5% ท้ายเทิร์น |
| R | ️ | twin_fang | Twin Fang | เขี้ยวคู่ | ATK +30, SPD +30 | ATK +30, SPD +30 | 10% chance to attack twice | 10% โอกาสโจมตี 2 ครั้ง |
| R | ️ | guardian_plate | Guardian Plate | เกราะผู้พิทักษ์ | DEF +30, MaxHP +150 | DEF +30, HP สูงสุด +150 | 10% chance to counter (deal damage 75% that hit) | 10% โอกาสโจมตีสวนกลับ (ทำดาเมจ 75% ในครั้งนั้น) |
| R |  | balanced_crest | Balanced Crest | ตราสมดุล | ATK +20, DEF +20, SPD +20, MaxHP +100 | ATK +20, DEF +20, SPD +20, HP สูงสุด +100 | On LOSE, damage recieve -10% | เมื่อแพ้ ดาเมจที่ได้รับ -10% |
| R |  | steel_lance | Steel Lance | ทวนเหล็กกล้า | ATK +30, DEF +30 | ATK +30, DEF +30 | 10% chance to poison on a landed hit | 10% โอกาสวางพิษเมื่อโจมตีโดน |
| R | 痢 | steel_mantle | Steel Mantle | ผ้าคลุมเหล็กกล้า | SPD +30, MaxHP +150 | SPD +30, HP สูงสุด +150 | 10% chance to reflect damage 50% to enemy | 10% โอกาสสะท้อนดาเมจ 50% ใส่ศัตรู |
| R | 壘 | steel_fist | Steel Fist | หมัดเหล็กกล้า | ATK +30, MaxHP +150 | ATK +30, HP สูงสุด +150 | 5% chance to stun enemy | 5% โอกาสสตันศัตรู |
| R |  | steel_crown | Steel Crown | มงกุฎเหล็กกล้า | DEF +30, SPD +30 | DEF +30, SPD +30 | On WIN, damage dealt +10% | เมื่อชนะ ดาเมจที่สร้าง +10% |
| E |  | dragonfang_blade | Dragonfang Blade | ดาบเขี้ยวมังกร | ATK +120 | ATK +120 | 25% chance to attack damage +75% | 25% โอกาสโจมตีแรงขึ้น 75% |
| E |  | aegis_bulwark | Aegis Bulwark | ปราการเอจิส | DEF +120 | DEF +120 | 20% chance to block (-50% damage that hit) | 20% โอกาสบล็อก (ลดดาเมจ 50% ในครั้งนั้น) |
| E | ️ | windwalker_greaves | Windwalker Greaves | สนับแข้งจอมพายุ | SPD +120 | SPD +120 | 15% chance to dodge attacks | 15% โอกาสหลบการโจมตี |
| E |  | titans_heart | Titan's Heart | หัวใจไททัน | MaxHP +600 | HP สูงสุด +600 | 20% chance to regen 5% Max HP at end of turn | 20% โอกาสฟื้นฟู HP 5% ท้ายเทิร์น |
| E |  | berserkers_fury | Berserker's Fury | โทสะนักรบเถื่อน | ATK +80, SPD +80 | ATK +80, SPD +80 | 10% chance to triple attack  | 10% โอกาสโจมตี 3 ครั้ง |
| E | ️ | fortress_core | Fortress Core | แก่นป้อมปราการ | DEF +80, MaxHP +400 | DEF +80, HP สูงสุด +400 | 20% chance to counter (deal damage 75% that hit) | 20% โอกาสโจมตีสวนกลับ (ทำดาเมจ 75% ในครั้งนั้น) |
| E | ✨ | omega_blade | Omega Blade | ดาบโอเมก้า | ATK +50, DEF +50, SPD +50, MaxHP +300 | ATK +50, DEF +50, SPD +50, HP สูงสุด +300 | On WIN, damage dealt +50% | เมื่อชนะ ดาเมจที่สร้าง +50% |
| E |  | dragon_spear | Fire Dragon Spear | หอกมังกรไฟ | ATK +80, DEF +80 | ATK +80, DEF +80 | 15% chance to burn on a landed hit | 15% โอกาสทำให้ศัตรูติดเผาไหม้เมื่อโจมตีโดน |
| E |  | phantom_cloak | Phantom Cloak | เสื้อคลุมภูต | SPD +80, MaxHP +400 | SPD +80, HP สูงสุด +400 | 20% chance to poison when attacked | 20% โอกาสทำให้ศัตรูติดพิษ เมื่อถูกโจมตี |
| E |  | titan_gauntlet | Titan Gauntlet | ถุงมือไททัน | ATK +80, MaxHP +400 | ATK +80, HP สูงสุด +400 | 10% chance to stun enemy | 10% โอกาสสตันศัตรู |
| E | ⛈️ | storm_crown | Storm Crown | มงกุฎพายุ | DEF +80, SPD +80 | DEF +80, SPD +80 | damage recieve -10% | ดาเมจที่ได้รับ -10% |
| R | ❄️ | glacial_aegis | Glacial Aegis | โล่ธารน้ำแข็ง | DEF +30, MaxHP +150 | DEF +30, HP สูงสุด +150 | 10% chance to Freeze the attacker when hit | 10% โอกาสทำให้ผู้โจมตีติด Freeze เมื่อถูกโจมตี |
| R | 🧙 | blightthorn_lance | Blightthorn Lance | ทวนหนามสาป | ATK +30, DEF +30 | ATK +30, DEF +30 | 10% chance to Curse the enemy on a landed hit | 10% โอกาสสาป (Curse) ศัตรูเมื่อโจมตีโดน |
| E | ❄️ | absolute_zero | Absolute Zero | ศูนย์สัมบูรณ์ | ATK +80, SPD +80 | ATK +80, SPD +80 | 15% chance to Freeze the enemy on a landed hit | 15% โอกาสทำให้ศัตรูติด Freeze เมื่อโจมตีโดน |
| E | 👁️ | chaos_scepter | Chaos Scepter | คทาจอมวุ่นวาย | ATK +80, MaxHP +400 | ATK +80, HP สูงสุด +400 | 15% chance to randomly inflict Blind, Curse, or Heal-Block on a landed hit | 15% โอกาสสุ่มทำให้ศัตรูติด Blind, Curse หรือ Heal-Block เมื่อโจมตีโดน |
| E | ❄️ | permafrost_crown | Permafrost Crown | มงกุฎน้ำแข็งนิรันดร์ | DEF +80, SPD +80 | DEF +80, SPD +80 | 10% chance on hit to Freeze both sides — you're permanently immune to Freeze's SPD penalty | 10% โอกาสเมื่อโจมตีโดนทำให้ทั้งสองฝ่ายติด Freeze — ตัวเองมีภูมิคุ้มกันต่อผลลด SPD ของ Freeze ตลอดเวลา |
