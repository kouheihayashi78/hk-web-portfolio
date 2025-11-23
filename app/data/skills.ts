import { Code2, Palette } from 'lucide-react'
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiLaravel,
  SiNodedotjs,
  SiPhp,
  SiDocker,
  SiAmazon,
  SiFigma,
  SiMysql,
} from 'react-icons/si'
import type { LucideIcon } from 'lucide-react'
import type { IconType } from 'react-icons'

export interface SkillTag {
  name: string
  icon: IconType | null
  color: string
}

export interface SkillCategory {
  icon: LucideIcon
  title: string
  description: string
  tags: SkillTag[]
}

export const skillCategories: SkillCategory[] = [
  {
    icon: Code2,
    title: '実装',
    description:
      'フロントエンドからバックエンド、インフラまで幅広く対応可能です。モダンな技術スタックを活用し、スケーラブルで保守性の高いシステムを構築します。',
    tags: [
      { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
      { name: 'PHP', icon: SiPhp, color: '#777BB4' },
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'AWS', icon: SiAmazon, color: '#FF9900' },
    ],
  },
  {
    icon: Palette,
    title: '設計',
    description:
      'ユーザー体験を重視した設計を行います。要件定義から画面設計、データベース設計まで、プロジェクト全体の設計に携わります。',
    tags: [
      { name: 'UI/UX Design', icon: SiFigma, color: '#F24E1E' },
      { name: 'DB Design', icon: SiMysql, color: '#00758F' },
      { name: 'API Design', icon: null, color: '#009688' },
    ],
  },
]
