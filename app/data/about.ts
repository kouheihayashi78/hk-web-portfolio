import { Heart, Lightbulb, Users, Briefcase, GraduationCap } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface Strength {
  icon: LucideIcon
  title: string
  description: string
  color: string
}

export interface Experience {
  type: 'work' | 'education'
  title: string
  company: string
  period: string
  description: string
}

export const strengths: Strength[] = [
  {
    icon: Heart,
    title: '温かみのある対応',
    description:
      'お客様一人ひとりに寄り添い、丁寧なコミュニケーションを心がけています。小さな疑問や不安も、遠慮なくご相談ください。',
    color: 'orange',
  },
  {
    icon: Users,
    title: '誠実な姿勢',
    description:
      '約束を守り、期待に応えることを大切にしています。困難な状況でも、正直にコミュニケーションを取りながら最善を尽くします。',
    color: 'green',
  },
  {
    icon: Lightbulb,
    title: '最後までやり切る',
    description:
      '任せていただいたことは最後までにやり切ります！（当たり前のような気もしますが...）ただし、無理なものは無理と正直に言います',
    color: 'blue',
  },
]

export const experiences: Experience[] = [
  {
    type: 'work',
    title: 'バックエンドエンジニア',
    company: '広告系の会社',
    period: '2025年4月 - 現在',
    description: 'Web制作、WordPressの受託案件を中心に、クライアントのニーズに応じた柔軟な開発を行う',
  },
  {
    type: 'work',
    title: '色々やるエンジニア',
    company: 'IT系ベンチャー',
    period: '2022年3月 - 2025年1月',
    description:
      'SES企業にて、SES→受託→自社開発に従事。Laravel、Nextを用いたシステムの開発や、既存システムの保守・改善を担当',
  },
  {
    type: 'education',
    title: 'プログラミングスクール受講',
    company: 'オンラインスクール',
    period: '2021年4月 - 2021年12月',
    description: 'Web開発の基礎からモダンな技術スタックまで学習。',
  },
  {
    type: 'work',
    title: '一般職',
    company: '一般企業',
    period: '2019年4月 - 2021年3月',
    description: '電気工事会社やエステティック業界にて接客・営業業務に従事。',
  },
  {
    type: 'education',
    title: '情報デザイン学科',
    company: '情報系の大学',
    period: '2015年 - 2019年',
    description:
      '学生時代はプログラミング、動画制作、アニメーション制作など諸々の分野を学びましたが、クリエイティブな思考とITスキルの基礎はそんなに身につきませんでした。',
  },
]
