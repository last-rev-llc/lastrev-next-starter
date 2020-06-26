import parse from './linkParser';
import mockContent from './linkParser.mock';

const baseData = {
  sameWindowActionText: 'Open in the same window',
  newWindowActionText: 'Open in a new window',
  modalActionText: 'Open in a modal',
  downloadActionText: 'Download',
  manualEntryTypeText: 'Manual text entry',
  contentRefTypeText: 'Content reference',
  assetRefTypeText: 'Asset reference',
  contentTypeId: 'testPage',
  urlMap: {
    testPage: {
      url: '/test/[key]',
      key: 'slug'
    }
  }
};

describe('linkParser', () => {
  describe('destination type: manualUrl', () => {
    test('action: open in the same window', () => {
      const parsed = parse({
        ...baseData,
        fields: {
          ...mockContent,
          destinationType: 'Manual text entry',
          action: 'Open in the same window'
        }
      });

      expect(parsed.href).toBe(mockContent.manualUrl);
      expect(parsed.as).toBe(null);
      expect(parsed.linkText).toBe(mockContent.linkText);
      expect(parsed.target).toBe(null);
      expect(parsed.isModal).toBe(false);
      expect(parsed.download).toBe(false);
    });

    test('action: open in a new window', () => {
      const parsed = parse({
        ...baseData,
        fields: {
          ...mockContent,
          destinationType: 'Manual text entry',
          action: 'Open in a new window'
        }
      });

      expect(parsed.href).toBe(mockContent.manualUrl);
      expect(parsed.as).toBe(null);
      expect(parsed.linkText).toBe(mockContent.linkText);
      expect(parsed.target).toBe('_blank');
      expect(parsed.isModal).toBe(false);
      expect(parsed.download).toBe(false);
    });

    test('action: open in a modal', () => {
      const parsed = parse({
        ...baseData,
        fields: {
          ...mockContent,
          destinationType: 'Manual text entry',
          action: 'Open in a modal'
        }
      });

      expect(parsed.href).toBe(mockContent.manualUrl);
      expect(parsed.as).toBe(null);
      expect(parsed.linkText).toBe(mockContent.linkText);
      expect(parsed.target).toBe(null);
      expect(parsed.isModal).toBe(true);
      expect(parsed.download).toBe(false);
    });

    test('action: Download', () => {
      const parsed = parse({
        ...baseData,
        fields: {
          ...mockContent,
          destinationType: 'Manual text entry',
          action: 'Download'
        }
      });

      expect(parsed.href).toBe(mockContent.manualUrl);
      expect(parsed.as).toBe(null);
      expect(parsed.linkText).toBe(mockContent.linkText);
      expect(parsed.target).toBe(null);
      expect(parsed.isModal).toBe(false);
      expect(parsed.download).toBe(true);
    });
  });

  describe('destination type: Content reference', () => {
    test('action: open in the same window', () => {
      const parsed = parse({
        ...baseData,
        fields: {
          ...mockContent,
          destinationType: 'Content reference',
          action: 'Open in the same window'
        }
      });

      expect(parsed.href).toBe('/test/[slug]');
      expect(parsed.as).toBe(`/test/${mockContent.contentReference.fields.slug}`);
      expect(parsed.linkText).toBe(mockContent.linkText);
      expect(parsed.target).toBe(null);
      expect(parsed.isModal).toBe(false);
      expect(parsed.download).toBe(false);
    });

    test('action: open in a new window', () => {
      const parsed = parse({
        ...baseData,
        fields: {
          ...mockContent,
          destinationType: 'Content reference',
          action: 'Open in a new window'
        }
      });

      expect(parsed.href).toBe('/test/[slug]');
      expect(parsed.as).toBe(`/test/${mockContent.contentReference.fields.slug}`);
      expect(parsed.linkText).toBe(mockContent.linkText);
      expect(parsed.target).toBe('_blank');
      expect(parsed.isModal).toBe(false);
      expect(parsed.download).toBe(false);
    });

    test('action: open in a modal', () => {
      const parsed = parse({
        ...baseData,
        fields: {
          ...mockContent,
          destinationType: 'Content reference',
          action: 'Open in a modal'
        }
      });

      expect(parsed.href).toBe('/test/[slug]');
      expect(parsed.as).toBe(`/test/${mockContent.contentReference.fields.slug}`);
      expect(parsed.linkText).toBe(mockContent.linkText);
      expect(parsed.target).toBe(null);
      expect(parsed.isModal).toBe(true);
      expect(parsed.download).toBe(false);
    });

    test('action: Download', () => {
      const parsed = parse({
        ...baseData,
        fields: {
          ...mockContent,
          destinationType: 'Content reference',
          action: 'Download'
        }
      });

      expect(parsed.href).toBe('/test/[slug]');
      expect(parsed.as).toBe(`/test/${mockContent.contentReference.fields.slug}`);
      expect(parsed.linkText).toBe(mockContent.linkText);
      expect(parsed.target).toBe(null);
      expect(parsed.isModal).toBe(false);
      expect(parsed.download).toBe(true);
    });
  });

  describe('destination type: Asset reference', () => {
    test('action: open in the same window', () => {
      const parsed = parse({
        ...baseData,
        fields: {
          ...mockContent,
          destinationType: 'Asset reference',
          action: 'Open in the same window'
        }
      });

      expect(parsed.href).toBe(mockContent.assetReference.fields.file.url);
      expect(parsed.as).toBe(null);
      expect(parsed.linkText).toBe(mockContent.linkText);
      expect(parsed.target).toBe(null);
      expect(parsed.isModal).toBe(false);
      expect(parsed.download).toBe(false);
    });

    test('action: open in a new window', () => {
      const parsed = parse({
        ...baseData,
        fields: {
          ...mockContent,
          destinationType: 'Asset reference',
          action: 'Open in a new window'
        }
      });

      expect(parsed.href).toBe(mockContent.assetReference.fields.file.url);
      expect(parsed.as).toBe(null);
      expect(parsed.linkText).toBe(mockContent.linkText);
      expect(parsed.target).toBe('_blank');
      expect(parsed.isModal).toBe(false);
      expect(parsed.download).toBe(false);
    });

    test('action: open in a modal', () => {
      const parsed = parse({
        ...baseData,
        fields: {
          ...mockContent,
          destinationType: 'Asset reference',
          action: 'Open in a modal'
        }
      });

      expect(parsed.href).toBe(mockContent.assetReference.fields.file.url);
      expect(parsed.as).toBe(null);
      expect(parsed.linkText).toBe(mockContent.linkText);
      expect(parsed.target).toBe(null);
      expect(parsed.isModal).toBe(true);
      expect(parsed.download).toBe(false);
    });

    test('action: Download', () => {
      const parsed = parse({
        ...baseData,
        fields: {
          ...mockContent,
          destinationType: 'Asset reference',
          action: 'Download'
        }
      });

      expect(parsed.href).toBe(mockContent.assetReference.fields.file.url);
      expect(parsed.as).toBe(null);
      expect(parsed.linkText).toBe(mockContent.linkText);
      expect(parsed.target).toBe(null);
      expect(parsed.isModal).toBe(false);
      expect(parsed.download).toBe(true);
    });
  });
});
