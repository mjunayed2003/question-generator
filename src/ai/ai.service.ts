import { Inject, Injectable } from '@nestjs/common';
import { AI_PROVIDER, type AIProvider } from './interface/ai-provider.interface.js';
import { GenerateQuestionsDto } from './dto/generate-questions.dto.js';

@Injectable()
export class AiService {
  constructor(
    @Inject(AI_PROVIDER)
    private readonly provider: AIProvider,
  ) {}

  async genarateQuestions(input: GenerateQuestionsDto) {
    return this.provider.generateQuestions(input);
  }
}